---
title: Generating a new administrator user account in Magento
layout: post
category: Magento
---

There has been numerous occasions where I've had to install Magento from a database dump that originated from a 3rd party. They don't usually bother to inform you of the administrator account. In fact I think most of the time they don't actually know themselves for whatever reason. Of course Magento <s>encrypts</s> hashes user passwords (it could be implemented much better but that's another rant of another day) so we can't just look in the database for the details. 

There are several temporary methods to gain access to the admin area.

* Change an existing user's email address to your own and perform a password reset
* Generate the MD5 hash manually with PHP or some sort of web service and apply to an existing account
* Manually insert new records into the `admin_user` and `admin_role` tables

All of these methods will get the job done but involve going back and forth between the data and structure of the existing users and roles. 

I am fairly sure that the majority of Magento developers do not even know the administration user account system works under the hood - I had to dig in and have a good look around the relationship between users and roles. I'm not going to go in to that here as there are many other topics on the subject already.

I have created a simple JS script that will accept the necessary fields for a new administrator account and generate the SQL required to add it to your database. It's become incredibly useful to me so I hope it will save others some time.

<p><a href="/tools/magento-admin-generator">Generate a new Magento admin account here</a></p>