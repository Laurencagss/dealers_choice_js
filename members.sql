DROP TABLE IF EXISTS members;

CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    name character varying(100) NOT NULL,
    job character varying(100) NOT NULL
);

INSERT INTO members (name,job) VALUES
('Alexis Rose', 'PR'),
('David Rose', 'Business Owner'),
('Moira Rose', 'Actress'),
('Johnny Rose', 'Who Knows'),
('Patrick Brewer', 'Business Owner');