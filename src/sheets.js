const SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

export async function submitEval(formData) {
  if (!SCRIPT_URL || SCRIPT_URL === 'your_apps_script_web_app_url_here') {
    console.log('[DEV] TRT eval submission:', formData);
    await new Promise(r => setTimeout(r, 800));
    return { success: true, dev: true };
  }
  const res = await fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' }, // avoids CORS preflight
    body: JSON.stringify(formData),
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  if (json.result !== 'success') throw new Error(json.error || 'Unknown error');
  return { success: true };
}

export async function fetchResponses() {
  if (!SCRIPT_URL || SCRIPT_URL === 'your_apps_script_web_app_url_here') {
    return getMockData();
  }
  const res = await fetch(`${SCRIPT_URL}?action=get`, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  return json.data || [];
}

function getMockData() {
  const types = [
    'Rope Rescue — High Angle',
    'Confined Space Rescue',
    'Trench Rescue',
    'Structural Collapse',
    'Vehicle & Machinery Rescue',
  ];
  const instructors = ['D. Brady', 'J. Martinez', 'K. Thompson'];
  const roles = ['TRT Technician', 'Company Officer', 'Firefighter', 'TRT Specialist'];
  const data = [];
  const now = Date.now();
  for (let i = 0; i < 24; i++) {
    const d = new Date(now - i * 3 * 24 * 60 * 60 * 1000);
    data.push({
      Timestamp: d.toISOString(),
      Date: d.toISOString().split('T')[0],
      Training_Type: types[i % types.length],
      Instructor: instructors[i % instructors.length],
      Role: roles[i % roles.length],
      Q1_Objectives: Math.floor(Math.random() * 2) + 4,
      Q2_Relevance:  Math.floor(Math.random() * 2) + 3,
      Q3_Instructor: Math.floor(Math.random() * 2) + 4,
      Q4_Prepared:   Math.floor(Math.random() * 2) + 3,
      Q5_Recommend:  Math.floor(Math.random() * 2) + 4,
      Overall:       Math.floor(Math.random() * 2) + 4,
      Comments: i % 4 === 0 ? 'More hands-on anchor building time would help retention.' : '',
    });
  }
  return data;
}
