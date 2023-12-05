module.exports = {
    platform: 'azure',
    endpoint: 'https://dev.azure.com/humanprinter/',
    token: process.env.TOKEN,
    hostRules: [
      {           
        "azureAutoApprove": false,
        "azureAutoComplete": false,
        "automerge": true
      },
      {
        "hostType": "nuget",
        "matchHost": "https://pkgs.dev.azure.com",
        "username": "",
        "password": process.env.TOKEN
      },
      {
        hostType: 'npm',
        matchHost: 'pkgs.dev.azure.com',
        username: 'apikey',
        password: process.env.TOKEN,
      },
      {
        hostType: 'docker',
        matchHost: 'humanprinter.azurecr.io',
        username: process.env.RENOVATE_CLIENTID,
        password: process.env.RENOVATE_PASSWORD,
      },
    ],
    packageRules: [
      {
         "groupName": "Pre-Commit hooks",
         "matchDatasources": [
           "pre-commit"
         ],
      }
    ],
    repositories: [
        'PublicRepos/RenovateReproduction'
    ],
    onboardingConfig: {
      "$schema": "https://docs.renovatebot.com/renovate-schema.json",
      "extends": ["config:best-practices"]
    },
    onboardingConfigFileName: ".github/renovate.json"
  };
