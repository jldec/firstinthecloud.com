---- /how-this-site-is-hosted ----
title: How this site is hosted
image:
date: 2017-06-24
template: post

## 1st post

Welcome to https://firstinthecloud.com, a blog about software in the _!cloud_.

This site is served by [GitHub Pages](https://help.github.com/articles/what-is-github-pages/).

A [git repo](https://github.com/jldec/firstinthecloud.com) is used to manage content in markdown files. Generating HTML into the `/docs` folder in the same repo using [pub-server](https://github.com/jldec/pub-server), makes for an easy publishing publishing workflow.

1. Write and preview locally using `pub`.
2. When ready to publish, generate the HTML with `pub -O`.
3. `git commit` and `git push` to make the changes live.

Here are the GitHub Pages settings:  
![Github Pages Settings](/images/gh-pages-settings.png)

The **_firstinthecloud.com_** domain name was registered with the registrar at [AWS Route 53](https://aws.amazon.com/route53/).  
_This was the only part of the site which required any payment._

![Route 53 Domain](/images/route-53.png)

[CloudFlare](https://www.cloudflare.com) manages the DNS name servers, SSL certs, [CNAME flattening](https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root/), redirection from HTTP to HTTPS, and also serves as an additional CDN layer in front of GitHub Pages.

![Cloudflare DNS](/images/cloudflare-dns.png)
![Cloudflare Pagerule](/images/cloudflare-pagerule.png)

> _!motorcycle 2x_
