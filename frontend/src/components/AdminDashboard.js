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
}