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

         {/* Tabs */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden">
          <div className="flex border-b border-purple-500/20">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-6 py-4 font-semibold transition-all ${
                activeTab === 'contacts'
                  ? 'text-purple-400 border-b-2 border-purple-400 bg-purple-500/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Contacts
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-4 font-semibold transition-all ${
                activeTab === 'analytics'
                  ? 'text-purple-400 border-b-2 border-purple-400 bg-purple-500/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Analytics
            </button>
          </div>

           {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                  {['all', 'unread', 'read', 'replied'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilter(status)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        filter === status
                          ? 'bg-purple-500 text-white'
                          : 'bg-slate-700/50 text-gray-400 hover:bg-slate-700'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
                <button
                  onClick={fetchData}
                  className="p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-all"
                >
                  <RefreshCw className="text-gray-400" size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <div className="text-center py-12">
                    <Mail className="mx-auto text-gray-600 mb-4" size={48} />
                    <p className="text-gray-400">No contacts found</p>
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <div
                      key={contact._id}
                      className="bg-slate-700/30 rounded-lg p-6 border border-slate-700 hover:border-purple-500/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-white font-semibold text-lg">
                              {contact.name}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(contact.status)}`}>
                              {contact.status}
                            </span>
                          </div>
                          <p className="text-purple-400 mb-1">{contact.email}</p>
                          <p className="text-gray-500 text-sm">{formatDate(contact.createdAt)}</p>
                        </div>
                        <div className="flex gap-2">
                          {contact.status !== 'read' && (
                            <button
                              onClick={() => updateContactStatus(contact._id, 'read')}
                              className="p-2 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-lg transition-all"
                              title="Mark as read"
                            >
                              <Eye className="text-yellow-400" size={18} />
                            </button>
                          )}
                          {contact.status !== 'replied' && (
                            <button
                              onClick={() => updateContactStatus(contact._id, 'replied')}
                              className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-all"
                              title="Mark as replied"
                            >
                              <Check className="text-green-400" size={18} />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-gray-400 text-sm font-semibold mb-2">Subject:</p>
                        <p className="text-white">{contact.subject}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-semibold mb-2">Message:</p>
                        <p className="text-gray-300 leading-relaxed">{contact.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Analytics Summary</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Total Events</h4>
                  <p className="text-4xl font-bold text-purple-400">
                    {analytics?.totalEvents || 0}
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Event Types</h4>
                  <div className="space-y-3">
                    {analytics?.summary?.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-400">{item._id}</span>
                        <span className="text-white font-semibold">{item.count}</span>
                      </div>
                    )) || <p className="text-gray-500">No data available</p>}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
