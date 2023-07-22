import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div id='Dashboard'>
      <h2>Dashboard</h2>
      <select defaultValue={''} onChange={(e) => navigate(e.target.value)} id="dash-select">
        <option value="">Posts</option>
        <option value="draft">Drafts</option>
        <option value="bookmark">Bookmarks</option>
      </select>

    <Outlet />
    </div>
  )
}

export default Dashboard