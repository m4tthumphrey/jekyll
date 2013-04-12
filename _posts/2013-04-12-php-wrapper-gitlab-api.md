---
title: PHP Wrapper for the Gitlab API
layout: post
category: Git
---

After using SVN for a number of years, we have slowly been introducing Git into our workflow here at Screen Pages. This workflow includes the brilliant open source Git hosting solution, [Gitlab](http://gitlab.org). I have been working on a continuous integration environment for the last few months in which Gitlab plays a major part. We use it's ever expanding API to speak to our [Jenkins](http://jenkins-ci.org/) server and our custom deployment platform, for specific use with Magento. 

I had never even looked Ruby code before working with Gitlab so I obviously started work on the platform using PHP, and the [Slim](http://www.slimframework.com/) in particular. There weren't any existing implementations of a PHP wrapper for the API so I <s>decided</s> had to take it on myself.

The project exists as a single entity on Github at [m4tthumphrey/php-gitlab-api](https://github.com/m4tthumphrey/php-gitlab-api). I am yet to decide whether to fully open source the deployment system but for now feel free to use, abuse, test and fix this wrapper to your hearts content.