br/>
<p align="center">
  <h3 align="center">Whisp (An Uber Clone)</h3>

  <p align="center">
    A Rideshare app created using React Native and tailwind CSS
    <br/>
    <br/>
  </p>
</p>



## About The Project

![Screen Shot](assets/screenshots/dashboard.png)


I created this API for a take home project given by [Aloompa](https://aloompa.com/) and enjoyed every second of it. As you scroll down you'll find all the details you need to begin playing around with it. Do know that there is no database integrated and it's only executing against a static JSON file. You may not see your mutations persist because of this. With that being said: enjoy!


## Built With

Node.js | GraphQL | Apollo Server | Serverless | AWS

## Getting Started

If you'd like to take a gander at this API and play around with queries, mutations, and all the delights that GraphQL brings to the table just follow along below.

### Prerequisites

Before you go any further make sure you have the lastest version of Node installed on your machine by running: 

```sh
npm install npm@latest -g
```

Also go ahead and install serverless while you're at it if you'd like to deploy your own project in the future:

```sh
npm install -g serverless
```

### Installation

Now that you're all updated follow along below:

You can find a live demo of the API via [this link](https://56fuqte4bd.execute-api.us-east-1.amazonaws.com/dev/graphql) that allows you to make queries and mutations using Apollo's playground.

You can also fork and clone this repo to build on or use as scaffolding for your own API by:

1. Clone the repo

```sh
git clone https://github.com/brennankapollock/AWS-Aloompa-API
```

2. Install npm packages

```sh
npm install
```

3. Start local environment w/ serverless-offline

```sh
npm run start
```
4. You can now access the API locally at [http://localhost:3000/dev/graphql](http://localhost:3000/dev/graphql) 
