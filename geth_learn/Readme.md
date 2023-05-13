### 安装 ganache

```
npm install ganache
```

配置文件 package.json

```

{
  "name": "geth_learn",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "ganache": "ganache --wallet.seed myCustomSeed"
  },
  "author": "",
  "license": "ISC"
}
```

```
npm run ganache
```

### 安装 geth

```
mac brew install ethereum
其他os 官网
```

### genesis.json

```
{
  "config": {
    "chainId": 666,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "clique": {
      "period": 15,
      "epoch": 30000
    }
  },
  "gasLimit": "8000000",
  "difficulty": "1",
  "extraData": "0x00000000000000000000000000000000000000000000000000000000000000008D5090Cbf4AC61BD8da523eDC8C52335a2136BDF0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "alloc": {
    "8047C8E6bF3E578B60d7dCCBcb36C6B79B34350e": {
      "balance": "0x1000000000000000000"
    }
  }
}

```

初始化

```
data 为保存数据的文件夹

创造账户
geth account new --datadir data

请将上方的genesis.json 的 8047C8E6bF3E578B60d7dCCBcb36C6B79B34350e替换成生成的account的地址

初始化geth

geth --datadir data init genesis.json

启动
geth --http --http.port "8545" --port "30300" --http.api "eth,web3,personal,net" --networkid 666 --nodiscover --datadir data --http.corsdomain "*" console




```

### 安装 truffle

```
npm install -g truffle
```

#### 初始化

```
truffle init
```

配置文件

```
windows truffle.js mac/linux truffle-config.js

内容
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


```

连接到 geth/ganache

```
truffle migrate --network privateNet
truffle migrate --network ganacheNet
```

### 局域网访问

```
mkdir myproject && cd myproject
truffle init
编辑 truffle-config.js，将相关部分注释去掉变成如下。

    development: {
    host: "192.168.3.15",     // Localhost (default: none)
    port: 8545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
    },
运行Truffle console，我们即连接到这一区块链网络：

truffle console
```
