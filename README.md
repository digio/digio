digio
=====
## Description
Digio is a lightweight and robust command-line interface (CLI) built around the [digio-api](https://www.npmjs.org/package/digio-api) library. Digio is fully compatible with the DigitalOcean API v2.0, supporting all exposed API methods.

For detailed description and requirements of the different command arguments, see the
official DigitalOcean API v2.0 documentation at https://developers.digitalocean.com

## Installation
```
...
```

## Usage
Run ```digio help``` to view all the available modules. Run ```digio help <module>```
to view all the available commands in a specific module.

### API-keys
Ease of access is managed through the ```apikeys``` module. To get started, simply
add your API-key using the following command:

```
digio apikeys add <name> <key>
```

When you add a new API-key, it will automatically be selected as primary. To change
which key you will be using, list available keys with ```digio apikeys list``` and
select the appropriate key with ```digio apikeys use <name>```

If you wish to remove an API-key, simply use ```digio apikeys delete <name>```

All API-keys are stored in a config file called ```.digio``` in your environments
home directory, be it ```~/ or C:\Users\username\``` or similar. The location of the
config file will be displayed the first time you run digio, and a default config file
is created.

### Examples
```
digio domains create example.com 127.0.0.1      // Create a new domain
digio droplets list                             // List all your droplets
digio droplets reboot 123456                    // Reboot droplet with ID 123456
digio extras rate                               // Display current RateLimit
```

For arguments that contain whitespace, wrap the argument in quotation marks:

```
digio keys create my_ssh_pubkey "ssh-rsa AbCz123 user@mail.org"  // Create a new ssh key
```

### Available modules

* actions
* apikeys
* domains
* droplets
* extras
* images
* keys
* regions
* sizes


## Licence

The MIT License (MIT)

Copyright (c) 2014 Tri M. Nguyen & Aleksander Skraastad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
