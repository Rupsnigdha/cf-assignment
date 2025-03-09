export const output = "{\n\
\t\"users\": [\n\
\t\t{\n\
\t\t\t\"id\": \"a1f9c3d8\",\n\
\t\t\t\"name\": \"Jasper Bennett\",\n\
\t\t\t\"email\": \"jasper.bennett@example.com\",\n\
\t\t\t\"profile\": {\n\
\t\t\t\t\"age\": 34,\n\
\t\t\t\t\"gender\": \"male\",\n\
\t\t\t\t\"location\": \"Toronto, Canada\",\n\
\t\t\t\t\"interests\": [\"hiking\", \"chess\", \"photography\"]\n\
\t\t\t},\n\
\t\t\t\"account\": {\n\
\t\t\t\t\"created_at\": \"2022-06-15T10:12:45Z\",\n\
\t\t\t\t\"status\": \"active\",\n\
\t\t\t\t\"subscription\": {\n\
\t\t\t\t\t\"plan\": \"premium\",\n\
\t\t\t\t\t\"renewal_date\": \"2025-04-01T00:00:00Z\"\n\
\t\t\t\t}\n\
\t\t\t},\n\
\t\t\t\"activity\": {\n\
\t\t\t\t\"last_login\": \"2025-03-09T08:12:32Z\",\n\
\t\t\t\t\"logins\": 293,\n\
\t\t\t\t\"actions\": [\n\
\t\t\t\t\t{\"type\": \"upload\", \"timestamp\": \"2025-03-08T14:22:33Z\"},\n\
\t\t\t\t\t{\"type\": \"comment\", \"timestamp\": \"2025-03-08T13:05:17Z\"},\n\
\t\t\t\t\t{\"type\": \"like\", \"timestamp\": \"2025-03-07T19:45:22Z\"}\n\
\t\t\t\t]\n\
\t\t\t}\n\
\t\t},\n\
\t\t{\n\
\t\t\t\"id\": \"b2e4d9f3\",\n\
\t\t\t\"name\": \"Elena Ruiz\",\n\
\t\t\t\"email\": \"elena.ruiz@example.com\",\n\
\t\t\t\"profile\": {\n\
\t\t\t\t\"age\": 28,\n\
\t\t\t\t\"gender\": \"female\",\n\
\t\t\t\t\"location\": \"Madrid, Spain\",\n\
\t\t\t\t\"interests\": [\"painting\", \"yoga\", \"travel\"]\n\
\t\t\t},\n\
\t\t\t\"account\": {\n\
\t\t\t\t\"created_at\": \"2021-11-03T18:09:27Z\",\n\
\t\t\t\t\"status\": \"suspended\",\n\
\t\t\t\t\"subscription\": {\n\
\t\t\t\t\t\"plan\": \"basic\",\n\
\t\t\t\t\t\"renewal_date\": \"2024-11-03T00:00:00Z\"\n\
\t\t\t\t}\n\
\t\t\t},\n\
\t\t\t\"activity\": {\n\
\t\t\t\t\"last_login\": \"2025-02-21T11:20:44Z\",\n\
\t\t\t\t\"logins\": 148,\n\
\t\t\t\t\"actions\": [\n\
\t\t\t\t\t{\"type\": \"login\", \"timestamp\": \"2025-02-21T11:20:44Z\"},\n\
\t\t\t\t\t{\"type\": \"post\", \"timestamp\": \"2025-01-15T10:22:13Z\"}\n\
\t\t\t\t]\n\
\t\t\t}\n\
\t\t}\n\
\t],\n\
\t\"settings\": {\n\
\t\t\"theme\": \"dark\",\n\
\t\t\"language\": \"en-US\",\n\
\t\t\"notifications\": {\n\
\t\t\t\"email\": true,\n\
\t\t\t\"sms\": false,\n\
\t\t\t\"push\": true\n\
\t\t},\n\
\t\t\"privacy\": {\n\
\t\t\t\"share_profile\": false,\n\
\t\t\t\"show_online_status\": true\n\
\t\t}\n\
\t},\n\
\t\"metrics\": {\n\
\t\t\"total_users\": 104583,\n\
\t\t\"active_users\": 83210,\n\
\t\t\"monthly_growth\": [\n\
\t\t\t{\"month\": \"January\", \"new_users\": 8520},\n\
\t\t\t{\"month\": \"February\", \"new_users\": 9021},\n\
\t\t\t{\"month\": \"March\", \"new_users\": 10012}\n\
\t\t],\n\
\t\t\"engagement\": {\n\
\t\t\t\"daily_active_users\": 29387,\n\
\t\t\t\"avg_session_duration\": \"00:07:34\",\n\
\t\t\t\"bounce_rate\": \"38.6%\"\n\
\t\t}\n\
\t},\n\
\t\"logs\": [\n\
\t\t{\n\
\t\t\t\"timestamp\": \"2025-03-09T07:12:09Z\",\n\
\t\t\t\"level\": \"info\",\n\
\t\t\t\"message\": \"User jasper.bennett@example.com logged in.\"\n\
\t\t},\n\
\t\t{\n\
\t\t\t\"timestamp\": \"2025-03-09T07:13:42Z\",\n\
\t\t\t\"level\": \"warn\",\n\
\t\t\t\"message\": \"Attempted login from suspended account elena.ruiz@example.com.\"\n\
\t\t},\n\
\t\t{\n\
\t\t\t\"timestamp\": \"2025-03-09T07:14:55Z\",\n\
\t\t\t\"level\": \"error\",\n\
\t\t\t\"message\": \"Payment processing failed for user id b2e4d9f3.\"\n\
\t\t}\n\
\t],\n\
\t\"feature_flags\": {\n\
\t\t\"beta_mode\": true,\n\
\t\t\"new_dashboard\": false,\n\
\t\t\"ai_assistant\": true,\n\
\t\t\"recommendation_engine\": true\n\
\t},\n\
\t\"servers\": [\n\
\t\t{\n\
\t\t\t\"name\": \"server-1\",\n\
\t\t\t\"ip\": \"192.168.1.10\",\n\
\t\t\t\"location\": \"New York\",\n\
\t\t\t\"uptime\": \"235 days\",\n\
\t\t\t\"status\": \"healthy\"\n\
\t\t},\n\
\t\t{\n\
\t\t\t\"name\": \"server-2\",\n\
\t\t\t\"ip\": \"192.168.1.11\",\n\
\t\t\t\"location\": \"Frankfurt\",\n\
\t\t\t\"uptime\": \"180 days\",\n\
\t\t\t\"status\": \"degraded\"\n\
\t\t},\n\
\t\t{\n\
\t\t\t\"name\": \"server-3\",\n\
\t\t\t\"ip\": \"192.168.1.12\",\n\
\t\t\t\"location\": \"Singapore\",\n\
\t\t\t\"uptime\": \"120 days\",\n\
\t\t\t\"status\": \"healthy\"\n\
\t\t}\n\
\t]\n\
}";
