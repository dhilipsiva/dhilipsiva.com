---
layout:    post
title:     Appropriate Number of Gunicorn Workers
---

To quote [Gunicorn documentation](http://docs.gunicorn.org/en/19.3/design.html#how-many-workers)

```
Generally we recommend (2 x $num_cores) + 1 as the number of workers to start off with. While not overly scientific, the formula is based on the assumption that for a given core, one worker will be reading or writing from the socket while the other worker is processing a request.
Obviously, your particular hardware and application are going to affect the optimal number of workers. Our recommendation is to start with the above guess and tune using TTIN and TTOU signals while the application is under load.
```

Gunicorn docs suggests that 2n+1 [`gunicorn -w <2n+1> myapp:wsgi`] is a good guess for number of workers (Yes, n = number of cores). I came up with a tiny shell script to apply this formula. All you need to do is this:

```
gunicorn -w $(( 2 * `cat /proc/cpuinfo | grep 'core id' | wc -l` + 1 )) myapp:wsgi
```

Where the command

```
cat /proc/cpuinfo | grep 'core id' | wc -l
```

will return the total number of actual CPU cores (n). So,

```
$(( 2 * `cat /proc/cpuinfo | grep 'core id' | wc -l` + 1 ))
```

equates to 2n+1 formula.

This will apply 2n+1 formula to all the linux-based machines.

You can also achieve this with [Gunicorn Configuration File](http://docs.gunicorn.org/en/19.3/configure.html#configuration-file) `gunicorn.conf.py` as follows

```
import multiprocessing

bind = "127.0.0.1:8000"
workers = multiprocessing.cpu_count() * 2 + 1
```

This was an [Answer that I posted in StackOverflow](http://stackoverflow.com/questions/15979428/what-is-the-appropriate-number-of-gunicorn-workers-for-each-amazon-instance-type/27664071#27664071)
