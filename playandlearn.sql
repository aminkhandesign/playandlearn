DROP TABLE IF IT EXISTS students;
CREATE TABLE students (
    id SERIAL ,
    username VARCHAR(255) NOT NULL UNIQUE,
    pword VARCHAR(255) NOT NULL,
    points INT(10) DEFAULT 0,
    INDEX myindex (id,username)
) ENGINE = Innodb DEFAULT CHARSET=utf8;


INSERT INTO studentS (username, pword) VALUES ("amin","ydp");