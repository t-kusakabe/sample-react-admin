CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`bio` text,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
