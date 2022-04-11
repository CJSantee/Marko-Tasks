psql -d postgres -f sql/createtables.sql &&
psql -d marko_tasks -f sql/functions/tasks.sql