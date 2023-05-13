module.exports = {
  networks: {
    ganacheNet: {  // 配置ganache网络环境
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // match any network
    },
    privateNet: {  // 配置geth的网络环境
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // match any network
    }
  }
}
