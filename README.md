# Project Rebuild

> 21 days. One goal. Show up every day.

A personal 21-day challenge and daily planning mobile application.

## Architecture

```
                 PROJECT REBUILD
                       │
              ┌────────┴────────┐
              │                 │
           Flutter           Backend
              │                 │
        Riverpod/Dio       Spring Boot
              │                 │
        Local Cache        Spring Security
              │                 │
        Sync Queue             JWT
              │                 │
        Local Notifs      Spring Data JPA
              │                 │
              └────────┬────────┘
                       │
                   PostgreSQL
                       │
              ┌────────┴─────────┐
              │                  │
            Users             Challenges
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                  Goals      Schedule      Challenge Days 
                                              │
                                           Tasks
```

## Phase 10: Robust Cloud Synchronization & Offline-First Behavior

- **Offline-First Storage**: Actions (completing, skipping, starting, resetting tasks, plan sync) execute immediately on local state and local persistence (`SharedPreferences`), providing zero-latency UI updates.
- **Sync Queue**: Local sync operations are queued in a persistent `SyncOperation` queue with backoff retry logic and network restoration triggers (`connectivity_plus`).
- **Cloud Persistence**: When network connection is established, pending mutations sync to the Spring Boot REST API backed by PostgreSQL.
- **Schedule Persistence**: `schedule_preferences` table added to store user wake/sleep time, work hours, busy blocks, available blocks, and focus preferences.
- **Multi-Account Security**: Session clearing & user-isolated storage namespace guarantees no cross-account data leakage.

## Getting Started

### Backend

```bash
cd backend

# Dev mode (H2 in-memory database)
mvn spring-boot:run

# Production (PostgreSQL)
DB_URL=jdbc:postgresql://localhost:5432/project_rebuild DB_USERNAME=postgres DB_PASSWORD=secret JWT_SECRET=your-256-bit-secret mvn spring-boot:run
```

Health check: `GET http://localhost:8080/api/health`

### Mobile

```bash
cd mobile
flutter pub get
flutter run
```

## REST APIs

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | User registration |
| `POST` | `/api/auth/login` | User authentication |
| `POST` | `/api/auth/google` | Firebase Google sign-in |
| `GET` | `/api/auth/me` | Fetch authenticated user profile |
| `GET` | `/api/challenges/active` | Get current active 21-day challenge |
| `POST` | `/api/challenges/sync` | Sync locally generated 21-day plan to cloud |
| `GET` | `/api/challenges/{id}/schedule` | Retrieve schedule preferences |
| `PUT` | `/api/challenges/{id}/schedule` | Save/update schedule preferences |
| `POST` | `/api/tasks/{taskId}/complete` | Mark task status as COMPLETED |
| `POST` | `/api/tasks/{taskId}/skip` | Mark task status as SKIPPED |
| `POST` | `/api/tasks/{taskId}/start` | Mark task status as IN_PROGRESS |
| `POST` | `/api/tasks/{taskId}/reset` | Reset task status to PENDING |
| `GET` | `/api/notifications/preferences` | Retrieve notification preferences |
| `PUT` | `/api/notifications/preferences` | Save notification preferences |

## Development Phases

1. ✅ Name + Goals
2. ✅ Goal Priority Ordering
3. ✅ Frequency + Duration + Targets
4. ✅ Schedule + Availability
5. ✅ Personalized 21-Day Plan Generation
6. ✅ Today Dashboard + Task Completion
7. ✅ 21-Day Calendar + Streak + Analytics
8. ✅ Local Notifications & Reminders
9. ✅ Backend Foundation + Auth + PostgreSQL
10. ✅ Cloud Synchronization & Offline-First Behavior
