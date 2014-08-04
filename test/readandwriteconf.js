#!/usr/bin/env node

var tools = require('../lib/tools')

tools.load_conf(function (err, conf) {
    if (err) return tools.error(err)
    tools.debug('tools.js', 'load_conf', JSON.stringify(conf, null, 4))

    var new_key = "bca03c6b04bde731f2080d96c79cb54e1468a994b99c981c190dd6dc9ad9d503"
    var new_name = "testkey"
    var used = 0

    if (conf.names.indexOf('testkey') === -1) {

        conf.keys.push(new_key)
        conf.names.push(new_name)
        conf.used = conf.names.indexOf('testkey')

        tools.write_conf(conf, function (err, data) {
            if (err) return tools.error('Unable to write to config file!')
            tools.success('Config file updated.')
            tools.debug('tools.js', 'write_conf', JSON.stringify(data, null, 4))
        })
    }
})
