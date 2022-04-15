CREATE TYPE taskTable AS (
    id INT,
    title TEXT,
	details TEXT,
	complete BOOLEAN,
	deadline TIMESTAMP
);

-- Create New Task (returns generated ID) --
CREATE OR REPLACE FUNCTION createTask(_title TEXT, _details TEXT)
RETURNS INT
AS $BODY$
DECLARE 
    _id INT;
BEGIN
    INSERT INTO tasks (title, details, complete)
    VALUES (_title, _details, FALSE)
    RETURNING id INTO _id;
    RETURN _id;
END
$BODY$
LANGUAGE 'plpgsql';

-- Get All Tasks --
CREATE OR REPLACE FUNCTION getTasks()
RETURNS SETOF taskTable
AS $BODY$
BEGIN
    RETURN QUERY
        SELECT id, title, details, complete, deadline
        FROM tasks;
END
$BODY$
LANGUAGE 'plpgsql';

-- Get Task by ID --
CREATE OR REPLACE FUNCTION getTask(_id INT)
RETURNS SETOF taskTable
AS $BODY$
BEGIN
    RETURN QUERY
        SELECT id, title, details, complete, deadline
        FROM tasks
        WHERE id = _id;
END
$BODY$
LANGUAGE 'plpgsql';

-- Update Task --
CREATE OR REPLACE FUNCTION updateTask(_title TEXT, _details TEXT, _complete BOOLEAN, _deadline TIMESTAMP, _id INT)
RETURNS void
AS $BODY$
BEGIN
    UPDATE tasks 
    SET (title, details, complete, deadline) = (_title, _details, _complete, _deadline)
    WHERE id = _id;
END
$BODY$
LANGUAGE 'plpgsql';

-- Toggle Task --
CREATE OR REPLACE FUNCTION toggleTask(_complete BOOLEAN, _id INT)
RETURNS void
AS $BODY$
BEGIN
    UPDATE tasks 
    SET complete = _complete
    WHERE id = _id;
END
$BODY$
LANGUAGE 'plpgsql';

-- Delete Task --
CREATE OR REPLACE FUNCTION deleteTask(_id INT)
RETURNS void
AS $BODY$
BEGIN
    DELETE
    FROM tasks 
    WHERE id = _id;
END 
$BODY$
LANGUAGE 'plpgsql';