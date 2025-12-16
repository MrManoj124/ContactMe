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
  
}