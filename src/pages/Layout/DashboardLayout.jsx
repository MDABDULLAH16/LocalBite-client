import React from 'react';
import useRole from '../../hooks/useRole';
import AdminDashboard from './../Dashboard/Admin/AdminDashboard';
import UserDashboard from './../Dashboard/UserDashboard/UserDashboard';

const DashboardLayout = () => {
    const role = useRole()
    const isAdmin = role==='admin'
    return isAdmin ?<AdminDashboard></AdminDashboard>:<UserDashboard></UserDashboard>
};

export default DashboardLayout;