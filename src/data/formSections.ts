
// import { FormSection } from '@/types/form';

// export const formSections: FormSection[] = [
//   {
//     id: 'platform-goals',
//     title: 'Platform Goals & Property Types',
//     description: 'Let\'s understand your primary objectives and target market.',
//     questions: [
//       {
//         id: 'primary_goal',
//         label: '1. What is the primary goal of your PMS platform?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'automate_operations', label: 'Automate hotel operations' },
//           { value: 'saas_platform', label: 'Build a SaaS platform' },
//           { value: 'compete_legacy', label: 'Compete with legacy PMS providers' },
//           { value: 'white_label', label: 'Create a white-label solution' },
//           { value: 'other', label: 'Other' }
//         ]
//       },
//       {
//         id: 'property_types',
//         label: '2. What types of properties will your system support?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'independent_hotels', label: 'Independent hotels' },
//           { value: 'resorts', label: 'Resorts' },
//           { value: 'guesthouses', label: 'Guesthouses / B&Bs' },
//           { value: 'serviced_apartments', label: 'Serviced apartments' },
//           { value: 'other', label: 'Other' }
//         ]
//       },
//       {
//         id: 'deployment_model',
//         label: '3. What deployment models do you want to support?',
//         type: 'radio',
//         required: true,
//         options: [
//           { value: 'cloud', label: 'Cloud (SaaS)' },
//           { value: 'on_premise', label: 'On-premise' },
//           { value: 'hybrid', label: 'Hybrid (on-prem + cloud backup)' }
//         ]
//       },
//       {
//         id: 'multi_property',
//         label: '4. Will your system support multi-property management (multi-tenancy)?',
//         type: 'radio',
//         required: true,
//         options: [
//           { value: 'yes', label: 'Yes' },
//           { value: 'no', label: 'No' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'reservations-rates',
//     title: 'Reservations & Rate Management',
//     description: 'Define how your system will handle bookings and pricing.',
//     questions: [
//       {
//         id: 'reservation_types',
//         label: '5. What types of reservations should be supported?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'walk_in', label: 'Walk-in' },
//           { value: 'direct_website', label: 'Direct website bookings' },
//           { value: 'ota', label: 'OTA (e.g., Booking.com, Airbnb)' },
//           { value: 'corporate_group', label: 'Corporate / Group bookings' }
//         ]
//       },
//       {
//         id: 'rate_plan_types',
//         label: '6. What rate plan types should be supported?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'standard_daily', label: 'Standard daily rate' },
//           { value: 'seasonal_pricing', label: 'Seasonal pricing' },
//           { value: 'promo_codes', label: 'Promo/discount codes' },
//           { value: 'meal_plan', label: 'Meal plan bundling' },
//           { value: 'per_guest', label: 'Per-guest pricing' }
//         ]
//       },
//       {
//         id: 'reservation_interface',
//         label: '7. Should the reservation interface include the following?',
//         type: 'multiselect',
//         required: false,
//         options: [
//           { value: 'calendar_view', label: 'Calendar view (day/week/month)' },
//           { value: 'auto_assignment', label: 'Auto room assignment' },
//           { value: 'drag_drop', label: 'Drag-and-drop reservation edit' },
//           { value: 'waitlist', label: 'Waitlist and hold bookings' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'payments-operations',
//     title: 'Payments & Daily Operations',
//     description: 'Configure payment processing and operational workflows.',
//     questions: [
//       {
//         id: 'payment_methods',
//         label: '8. What payment methods will the system need to support?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'credit_debit', label: 'Credit/debit cards' },
//           { value: 'online_gateways', label: 'Online gateways (Stripe, Razorpay)' },
//           { value: 'wallets_upi', label: 'Wallets / UPI' },
//           { value: 'cash_bank', label: 'Cash / Bank transfer' }
//         ]
//       },
//       {
//         id: 'housekeeping_functions',
//         label: '9. What housekeeping functions should be supported?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'room_status', label: 'Room status: Clean, Dirty, Inspected, Maintenance' },
//           { value: 'task_assignment', label: 'Task assignment by shift' },
//           { value: 'mobile_updates', label: 'Mobile updates for staff' },
//           { value: 'lost_found', label: 'Lost & found tracking' }
//         ]
//       },
//       {
//         id: 'maintenance_features',
//         label: '10. What maintenance features are required?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'ticketing_system', label: 'Maintenance ticketing system' },
//           { value: 'preventive_scheduling', label: 'Preventive maintenance scheduling' },
//           { value: 'technician_assignment', label: 'Technician task assignment' },
//           { value: 'maintenance_log', label: 'Maintenance log per room' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'billing-features',
//     title: 'Billing & Financial Management',
//     description: 'Set up billing, payments, and financial reporting features.',
//     questions: [
//       {
//         id: 'billing_features',
//         label: '11. What billing features should be included?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'split_billing', label: 'Split billing (e.g., room + minibar)' },
//           { value: 'invoice_generation', label: 'Invoice generation' },
//           { value: 'refund_management', label: 'Refund management' },
//           { value: 'multi_currency', label: 'Multi-currency handling' },
//           { value: 'tax_configuration', label: 'Tax configuration (e.g., GST/VAT)' }
//         ]
//       },
//       {
//         id: 'payment_features',
//         label: '12. Which payment features do you want?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'gateway_integration', label: 'Secure payment gateway integration' },
//           { value: 'folio_management', label: 'Folio management (group & individual)' },
//           { value: 'pci_compliance', label: 'PCI-DSS compliance' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'integrations',
//     title: 'OTA & Channel Integrations',
//     description: 'Define your online travel agency and distribution channel requirements.',
//     questions: [
//       {
//         id: 'ota_integrations',
//         label: '13. Which OTA integrations are needed?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'booking_com', label: 'Booking.com' },
//           { value: 'airbnb', label: 'Airbnb' },
//           { value: 'expedia', label: 'Expedia' },
//           { value: 'agoda', label: 'Agoda' },
//           { value: 'hotelbeds', label: 'Hotelbeds' },
//           { value: 'other', label: 'Other' }
//         ]
//       },
//       {
//         id: 'ota_phase1',
//         label: '14. Do you require OTA/channel manager integration in Phase 1?',
//         type: 'radio',
//         required: true,
//         options: [
//           { value: 'yes', label: 'Yes' },
//           { value: 'no', label: 'No' }
//         ]
//       },
//       {
//         id: 'ota_sync_method',
//         label: '15. How will OTA sync be handled?',
//         type: 'radio',
//         required: true,
//         options: [
//           { value: 'native', label: 'Native integration' },
//           { value: 'third_party', label: 'Third-party channel manager (e.g., STAAH, SiteMinder)' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'reviews-analytics',
//     title: 'Review Management & Analytics',
//     description: 'Configure review management and reporting capabilities.',
//     questions: [
//       {
//         id: 'review_platforms',
//         label: '16. Which review platforms should be integrated?',
//         type: 'multiselect',
//         required: false,
//         options: [
//           { value: 'google', label: 'Google' },
//           { value: 'booking_com', label: 'Booking.com' },
//           { value: 'tripadvisor', label: 'TripAdvisor' },
//           { value: 'airbnb', label: 'Airbnb' },
//           { value: 'yelp', label: 'Yelp' },
//           { value: 'hotels_com', label: 'Hotels.com' },
//           { value: 'other', label: 'Other' }
//         ]
//       },
//       {
//         id: 'review_frequency',
//         label: '17. How frequently should reviews be fetched?',
//         type: 'select',
//         required: false,
//         options: [
//           { value: 'realtime', label: 'Real-time' },
//           { value: 'hourly', label: 'Hourly' },
//           { value: 'daily', label: 'Daily' },
//           { value: 'weekly', label: 'Weekly' }
//         ]
//       },
//       {
//         id: 'review_features',
//         label: '18. What review features should be supported?',
//         type: 'multiselect',
//         required: false,
//         options: [
//           { value: 'centralized_inbox', label: 'Centralized inbox' },
//           { value: 'sentiment_analysis', label: 'Sentiment analysis' },
//           { value: 'tagging_filtering', label: 'Tagging & filtering' },
//           { value: 'ai_replies', label: 'AI-generated replies' },
//           { value: 'reply_publishing', label: 'Reply publishing via API' },
//           { value: 'multilingual_replies', label: 'Multilingual reply generation' },
//           { value: 'analytics_reporting', label: 'Analytics & reporting' }
//         ]
//       },
//       {
//         id: 'ai_reply_type',
//         label: '19. What kind of AI replies should be enabled?',
//         type: 'radio',
//         required: false,
//         options: [
//           { value: 'suggested', label: 'Suggested reply with manual approval' },
//           { value: 'auto_rating', label: 'Auto-reply based on rating' },
//           { value: 'manual_only', label: 'None (manual replies only)' }
//         ]
//       },
//       {
//         id: 'analytics_reports',
//         label: '20. Which analytics reports do you need?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'daily_revenue', label: 'Daily revenue' },
//           { value: 'occupancy_adr', label: 'Occupancy & ADR' },
//           { value: 'tax_summary', label: 'Tax summary' },
//           { value: 'channel_performance', label: 'Source/channel performance' },
//           { value: 'review_sentiment', label: 'Review sentiment trends' },
//           { value: 'exportable', label: 'Exportable (PDF, Excel)' }
//         ]
//       },
//       {
//         id: 'scheduled_reports',
//         label: '21. Should reports be scheduled and emailed automatically?',
//         type: 'radio',
//         required: true,
//         options: [
//           { value: 'yes', label: 'Yes' },
//           { value: 'no', label: 'No' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'system-access',
//     title: 'System Access & Security',
//     description: 'Define user roles, security requirements, and access controls.',
//     questions: [
//       {
//         id: 'third_party_integrations',
//         label: '22. What third-party integrations are required?',
//         type: 'multiselect',
//         required: false,
//         options: [
//           { value: 'pos', label: 'POS (F&B, Spa)' },
//           { value: 'door_locks', label: 'Door lock system' },
//           { value: 'wifi_login', label: 'Wi-Fi login' },
//           { value: 'crm', label: 'CRM' },
//           { value: 'accounting', label: 'Accounting software' },
//           { value: 'custom_api', label: 'Custom API access' }
//         ]
//       },
//       {
//         id: 'public_api',
//         label: '23. Do you require a public API for developers/partners?',
//         type: 'radio',
//         required: true,
//         options: [
//           { value: 'yes', label: 'Yes' },
//           { value: 'no', label: 'No' }
//         ]
//       },
//       {
//         id: 'user_roles',
//         label: '24. What user roles should the system support?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'admin', label: 'Admin' },
//           { value: 'front_desk', label: 'Front Desk' },
//           { value: 'housekeeping', label: 'Housekeeping' },
//           { value: 'maintenance', label: 'Maintenance' },
//           { value: 'marketing', label: 'Marketing' },
//           { value: 'review_manager', label: 'Review Manager' }
//         ]
//       },
//       {
//         id: 'security_features',
//         label: '25. What security features are important to you?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'role_based_access', label: 'Role-based access' },
//           { value: 'two_factor_auth', label: '2FA' },
//           { value: 'audit_logging', label: 'Audit logging' },
//           { value: 'gdpr_pci_compliance', label: 'GDPR/PCI compliance' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'business-model',
//     title: 'Business Model & Launch Timeline',
//     description: 'Define your business model, pricing strategy, and launch timeline.',
//     questions: [
//       {
//         id: 'white_label',
//         label: '26. Should the PMS be white-labeled?',
//         type: 'radio',
//         required: true,
//         options: [
//           { value: 'yes', label: 'Yes' },
//           { value: 'no', label: 'No' }
//         ]
//       },
//       {
//         id: 'billing_models',
//         label: '27. What SaaS billing models should be supported?',
//         type: 'multiselect',
//         required: true,
//         options: [
//           { value: 'monthly', label: 'Monthly subscription' },
//           { value: 'annual', label: 'Annual plans' },
//           { value: 'per_room', label: 'Per-room or per-property pricing' },
//           { value: 'usage_based', label: 'Usage-based (e.g., per booking)' }
//         ]
//       },
//       {
//         id: 'mvp_timeline',
//         label: '28. What is your target timeline for MVP launch?',
//         type: 'text',
//         required: true,
//         placeholder: 'e.g., 6 months, Q2 2024, etc.'
//       },
//       {
//         id: 'training_tools',
//         label: '29. Do you need training/onboarding tools for your clients?',
//         type: 'radio',
//         required: true,
//         options: [
//           { value: 'yes', label: 'Yes' },
//           { value: 'no', label: 'No' }
//         ]
//       },
//       {
//         id: 'additional_requirements',
//         label: '30. Any specific requirements, goals, or technical constraints?',
//         type: 'textarea',
//         required: false,
//         placeholder: 'Please describe any additional requirements, specific goals, technical constraints, or other considerations for your PMS development...'
//       }
//     ]
//   }
// ];

import { FormSection } from '@/types/form';

export const formSections: FormSection[] = [
  {
    id: 'business-overview',
    title: 'Business Overview',
    description: 'Help us understand your business operations and market positioning.',
    questions: [
      {
        id: 'business_description',
        label: '1. Briefly describe your business and operations.',
        type: 'textarea',
        required: true
      },
      {
        id: 'locations',
        label: '2. Where do you operate?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'single_location', label: 'Single location' },
          { value: 'multiple_locations', label: 'Multiple locations' },
          { value: 'international', label: 'Multiple countries' }
        ]
      },
      {
        id: 'activity_types',
        label: '3. What types of activities do you offer?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'parasailing', label: 'Parasailing' },
          { value: 'snorkeling', label: 'Snorkeling' },
          { value: 'jet_ski', label: 'Jet Ski' },
          { value: 'boat_tours', label: 'Boat Tours' },
          { value: 'sunset_cruise', label: 'Sunset Cruise' },
          { value: 'private_charter', label: 'Private Charters' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        id: 'target_customers',
        label: '4. Who are your primary customers?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'tourists', label: 'Tourists' },
          { value: 'locals', label: 'Local residents' },
          { value: 'families', label: 'Families' },
          { value: 'cruise_visitors', label: 'Cruise passengers' },
          { value: 'corporate', label: 'Corporate / Group Bookings' }
        ]
      }
    ]
  },
  {
    id: 'chat-goals',
    title: 'WebChat Agent Goals',
    description: 'Define what you expect from the AI chat solution.',
    questions: [
      {
        id: 'objectives',
        label: '5. What do you want to achieve with the chat agent?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'increase_bookings', label: 'Increase bookings' },
          { value: 'reduce_queries', label: 'Reduce manual inquiries' },
          { value: 'lead_generation', label: 'Lead generation' },
          { value: 'faq_automation', label: 'Automate FAQs' },
          { value: 'upselling', label: 'Upselling & add-ons' }
        ]
      },
      {
        id: 'chat_availability',
        label: '6. When should the chat agent operate?',
        type: 'radio',
        required: true,
        options: [
          { value: '24_7', label: '24/7' },
          { value: 'business_hours', label: 'Business hours only' }
        ]
      },
      {
        id: 'chat_tone',
        label: '7. Preferred tone for the chat assistant:',
        type: 'radio',
        required: true,
        options: [
          { value: 'friendly', label: 'Friendly & fun' },
          { value: 'professional', label: 'Professional & informative' },
          { value: 'sales', label: 'Sales-focused' }
        ]
      }
    ]
  },
  {
    id: 'customer-journey',
    title: 'Customer Journey & Use Cases',
    description: 'Identify what the chat agent should assist customers with.',
    questions: [
      {
        id: 'pre_booking',
        label: '8. What should the bot assist with before booking?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'tour_recommendation', label: 'Tour recommendations' },
          { value: 'pricing_info', label: 'Pricing questions' },
          { value: 'availability_check', label: 'Availability checks' },
          { value: 'restrictions', label: 'Age & safety restrictions' }
        ]
      },
      {
        id: 'booking_support',
        label: '9. Should the chatbot assist during booking?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'fareharbor_redirect', label: 'Redirect to FareHarbor' },
          { value: 'promo_assistance', label: 'Promo codes & discounts' },
          { value: 'form_help', label: 'Form filling support' }
        ]
      },
      {
        id: 'post_booking',
        label: '10. Should the bot assist after booking?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'meeting_point', label: 'Meeting instructions' },
          { value: 'weather_updates', label: 'Weather updates' },
          { value: 'reschedule_cancel', label: 'Reschedule / cancel' },
          { value: 'reminders', label: 'Trip reminders' }
        ]
      }
    ]
  },
  {
    id: 'fareharbor',
    title: 'FareHarbor Integration',
    description: 'Configure booking engine integration capabilities.',
    questions: [
      {
        id: 'fareharbor_data',
        label: '11. What data should the chatbot fetch from FareHarbor?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'availability', label: 'Availability' },
          { value: 'pricing', label: 'Pricing' },
          { value: 'activity_details', label: 'Activity details' },
          { value: 'schedule', label: 'Schedules' }
        ]
      },
      {
        id: 'booking_lookup',
        label: '12. Should the bot support booking lookup by confirmation number?',
        type: 'radio',
        required: true,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]
      }
    ]
  },
  {
    id: 'policies',
    title: 'Policies & Customer Information',
    description: 'Provide operational rules and customer guidelines.',
    questions: [
      {
        id: 'policy_docs',
        label: '13. Which policies should the bot reference?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'cancellation', label: 'Cancellation policy' },
          { value: 'weather', label: 'Weather policy' },
          { value: 'refund', label: 'Refund policy' },
          { value: 'safety', label: 'Safety instructions' }
        ]
      },
      {
        id: 'frequent_questions',
        label: '14. List your top customer questions:',
        type: 'textarea',
        required: false
      }
    ]
  },
  {
    id: 'leads-upsells',
    title: 'Leads & Upselling',
    description: 'Capture user data and improve revenue.',
    questions: [
      {
        id: 'lead_info',
        label: '15. What user information should the bot collect?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'name', label: 'Name' },
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Phone' },
          { value: 'travel_date', label: 'Travel date' },
          { value: 'group_size', label: 'Group size' }
        ]
      },
      {
        id: 'upselling',
        label: '16. Should the bot upsell additional services?',
        type: 'multiselect',
        required: false,
        options: [
          { value: 'private_tours', label: 'Private tours' },
          { value: 'photos', label: 'Photos & videos' },
          { value: 'addons', label: 'Add-ons' }
        ]
      }
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations & Platforms',
    description: 'Define systems and platforms for integration.',
    questions: [
      {
        id: 'channels',
        label: '17. Where should the chatbot be available?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'website', label: 'Website' },
          { value: 'mobile', label: 'Mobile web' },
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'instagram', label: 'Instagram' }
        ]
      },
      {
        id: 'crm',
        label: '18. Do you use a CRM?',
        type: 'radio',
        required: true,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]
      }
    ]
  },
  {
    id: 'reporting',
    title: 'Analytics & Reporting',
    description: 'Measure chatbot performance and business impact.',
    questions: [
      {
        id: 'metrics',
        label: '19. Which metrics do you want to track?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'leads', label: 'Leads captured' },
          { value: 'conversions', label: 'Booking redirects' },
          { value: 'faq_usage', label: 'FAQ usage' },
          { value: 'satisfaction', label: 'Customer satisfaction' }
        ]
      },
      {
        id: 'reports',
        label: '20. Report frequency:',
        type: 'radio',
        required: true,
        options: [
          { value: 'weekly', label: 'Weekly' },
          { value: 'monthly', label: 'Monthly' }
        ]
      }
    ]
  },
  {
    id: 'project',
    title: 'Project Management',
    description: 'Align expectations and communication.',
    questions: [
      {
        id: 'point_of_contact',
        label: '21. Who will be the main point of contact?',
        type: 'text',
        required: true
      },
      {
        id: 'timeline',
        label: '22. Expected launch timeline:',
        type: 'text',
        required: true
      },
      {
        id: 'special_notes',
        label: '23. Additional comments or requirements:',
        type: 'textarea',
        required: false
      }
    ]
  }
];
