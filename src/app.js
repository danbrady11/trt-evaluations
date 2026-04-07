Skip to content
danbrady11
Hazmat-Evaluations
Repository navigation
Code
Issues
Pull requests
Actions
Projects
Wiki
Security and quality
Insights
Settings
Hazmat-Evaluations/src
/
App.js
in
main

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

No wrap
Editing App.js file contents
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EvalForm from './pages/EvalForm';
import Admin from './pages/Admin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EvalForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
