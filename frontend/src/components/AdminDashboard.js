import { useState } from 'react';
import React, {useState, useEffect} from 'react'
import {Mail, Eye, Check, Trash2, RefreshCw} from 'lucide-react';

const AdminDashboard = () => {
    cosnt [contacts, setContacts] = useState([]);
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('contacts');
    const [filter, setFilter] = useState('all');

    const API_URL = 'http://localhost:5000/api';

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = async () => {
    setLoading(true);
    try {
        // Fetch contacts
      const statusParam = filter !== 'all' ? `?status=${filter}` : '';
      const contactsRes = await fetch(`${API_URL}/contacts${statusParam}`);
      const contactsData = await contactsRes.json();
      
      if (contactsData.success) {
        setContacts(contactsData.data);
      }

      // Fetch analytics
      const analyticsRes = await fetch(`${API_URL}/analytics/summary`);
      const analyticsData = await analyticsRes.json();
      
      if (analyticsData.success) {
        setAnalytics(analyticsData.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_URL}/contacts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

   const getStatusColor = (status) => {
    switch (status) {
      case 'unread':
        return 'bg-red-500';
      case 'read':
        return 'bg-yellow-500';
      case 'replied':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your portfolio contacts and analytics</p>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Contacts</p>
                <h3 className="text-3xl font-bold text-white">
                  {analytics?.totalContacts || 0}
                </h3>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Mail className="text-purple-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Unread</p>
                <h3 className="text-3xl font-bold text-white">
                  {contacts.filter(c => c.status === 'unread').length}
                </h3>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <Mail className="text-red-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Read</p>
                <h3 className="text-3xl font-bold text-white">
                  {contacts.filter(c => c.status === 'read').length}
                </h3>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Eye className="text-yellow-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Replied</p>
                <h3 className="text-3xl font-bold text-white">
                  {contacts.filter(c => c.status === 'replied').length}
                </h3>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Check className="text-green-400" size={24} />
              </div>
            </div>
          </div>
        </div>
      

}