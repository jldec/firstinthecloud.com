---- /how-this-site-is-hosted ----
title: How this site is hosted
image:
date: 2017-06-24
template: post

## 1st post

Welcome to https://firstinthecloud.com, a blog about software in the _!cloud_.

The content for this site is served by [GitHub Pages](https://help.github.com/articles/what-is-github-pages/). A single [git repo](https://github.com/jldec/firstinthecloud.com) contains the markdown and the rendered HTML in a `/docs` folder.

Conversion from markdown to HTML is performed using the  [pub-server](https://jldec.github.io/pub-doc/) static site generator. Commits are done manually from my laptop using the git cli.

The _firstinthecloud.com_ domain name was registered with the registrar at [AWS Route 53](https://aws.amazon.com/route53/). This was the only part of the site which required any payment.

[CloudFlare](https://www.cloudflare.com) manages the DNS name servers, SSL certs, [CNAME flattening](https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root/), redirection from HTTP to HTTPS, and also serves as an additional CDN layer in front of GitHub Pages.

> _!motorcycle 2x_
