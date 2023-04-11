# Bootstrap Tutorial

## Grid System

```textfile
Example:
<!-- by default, we use the <div> element -->
.row
    .column
        .pt-2
            p
            .bg-image
                img
                a
            .d-flex .justify-content-between
                a
                p
            a
                h5
                p
    .column
        .pt-2
    .column
        .list-group
    .column
        .list-group
```

az deployment group create --resource-group IoTEdgeResources --template-uri "https://raw.githubusercontent.com/Azure/iotedge-vm-deploy/1.4/edgeDeploy.json" --parameters dnsLabelPrefix='dcn-vm' --parameters adminUsername='azureUser' --parameters deviceConnectionString=$(az iot hub device-identity connection-string show --device-id myEdgeDevice --hub-nam∏e dcn-hub -o tsv) --parameters authenticationType='password'  --parameters adminPasswordOrKey="dcn-password"

az deployment group create \
--resource-group IoTEdgeResourcesEast \
--template-uri "https://raw.githubusercontent.com/Azure/iotedge-vm-deploy/1.4/edgeDeploy.json" \
--parameters dnsLabelPrefix='dcn-vm' \
--parameters adminUsername='azureUser' \
--parameters deviceConnectionString=$(az iot hub device-identity connection-string show --device-id myEdgeDevice --hub-name dcn-hub-east -o tsv) \
--parameters authenticationType='password' \
--parameters adminPasswordOrKey="DCN-password-123"


- Deploy the IoT Edge device

xinyu [ ~ ]$ az deployment group create \
--resource-group IoTEdgeResourcesEast \
--template-uri "https://raw.githubusercontent.com/Azure/iotedge-vm-deploy/1.4/edgeDeploy.json" \
--parameters dnsLabelPrefix='dcn-vm' \
--parameters adminUsername='azureUser' \
--parameters deviceConnectionString=$(az iot hub device-identity connection-string show --device-id myEdgeDevice --hub-name dcn-hub-east -o tsv) \
--parameters authenticationType='password' \
--parameters adminPasswordOrKey="DCN-password-123"
{
  "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Resources/deployments/edgeDeploy",
  "location": null,
  "name": "edgeDeploy",
  "properties": {
    "correlationId": "c98b5977-6713-4493-8141-e92cc10ce8cd",
    "debugSetting": null,
    "dependencies": [
      {
        "dependsOn": [
          {
            "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Network/networkSecurityGroups/nsg-uqso3j7udmjgk",
            "resourceGroup": "IoTEdgeResourcesEast",
            "resourceName": "nsg-uqso3j7udmjgk",
            "resourceType": "Microsoft.Network/networkSecurityGroups"
          }
        ],
        "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Network/virtualNetworks/vnet-uqso3j7udmjgk",
        "resourceGroup": "IoTEdgeResourcesEast",
        "resourceName": "vnet-uqso3j7udmjgk",
        "resourceType": "Microsoft.Network/virtualNetworks"
      },
      {
        "dependsOn": [
          {
            "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Network/publicIPAddresses/ip-dcn-vm",
            "resourceGroup": "IoTEdgeResourcesEast",
            "resourceName": "ip-dcn-vm",
            "resourceType": "Microsoft.Network/publicIPAddresses"
          },
          {
            "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Network/virtualNetworks/vnet-uqso3j7udmjgk",
            "resourceGroup": "IoTEdgeResourcesEast",
            "resourceName": "vnet-uqso3j7udmjgk",
            "resourceType": "Microsoft.Network/virtualNetworks"
          }
        ],
        "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Network/networkInterfaces/nic-uqso3j7udmjgk",
        "resourceGroup": "IoTEdgeResourcesEast",
        "resourceName": "nic-uqso3j7udmjgk",
        "resourceType": "Microsoft.Network/networkInterfaces"
      },
      {
        "dependsOn": [
          {
            "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Network/networkInterfaces/nic-uqso3j7udmjgk",
            "resourceGroup": "IoTEdgeResourcesEast",
            "resourceName": "nic-uqso3j7udmjgk",
            "resourceType": "Microsoft.Network/networkInterfaces"
          }
        ],
        "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Compute/virtualMachines/vm-uqso3j7udmjgk",
        "resourceGroup": "IoTEdgeResourcesEast",
        "resourceName": "vm-uqso3j7udmjgk",
        "resourceType": "Microsoft.Compute/virtualMachines"
      }
    ],
    "duration": "PT36.1751224S",
    "error": null,
    "mode": "Incremental",
    "onErrorDeployment": null,
    "outputResources": [
      {
        "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Compute/virtualMachines/vm-uqso3j7udmjgk",
        "resourceGroup": "IoTEdgeResourcesEast"
      },
      {
        "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Network/networkInterfaces/nic-uqso3j7udmjgk",
        "resourceGroup": "IoTEdgeResourcesEast"
      },
      {
        "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Network/networkSecurityGroups/nsg-uqso3j7udmjgk",
        "resourceGroup": "IoTEdgeResourcesEast"
      },
      {
        "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Network/publicIPAddresses/ip-dcn-vm",
        "resourceGroup": "IoTEdgeResourcesEast"
      },
      {
        "id": "/subscriptions/95a3730e-91fc-4e63-9e6f-c014ea888dff/resourceGroups/IoTEdgeResourcesEast/providers/Microsoft.Network/virtualNetworks/vnet-uqso3j7udmjgk",
        "resourceGroup": "IoTEdgeResourcesEast"
      }
    ],
    "outputs": {
      "public_SSH": {
        "type": "String",
        "value": "ssh azureUser@dcn-vm.eastus2.cloudapp.azure.com"
      }
    },
    "parameters": {
      "adminPasswordOrKey": {
        "type": "SecureString"
      },
      "adminUsername": {
        "type": "String",
        "value": "azureUser"
      },
      "allowSsh": {
        "type": "Bool",
        "value": true
      },
      "authenticationType": {
        "type": "String",
        "value": "password"
      },
      "deviceConnectionString": {
        "type": "SecureString"
      },
      "dnsLabelPrefix": {
        "type": "String",
        "value": "dcn-vm"
      },
      "location": {
        "type": "String",
        "value": "eastus2"
      },
      "ubuntuOSVersion": {
        "type": "String",
        "value": "20_04-lts"
      },
      "vmSize": {
        "type": "String",
        "value": "Standard_DS1_v2"
      }
    },
    "parametersLink": null,
    "providers": [
      {
        "id": null,
        "namespace": "Microsoft.Network",
        "providerAuthorizationConsentState": null,
        "registrationPolicy": null,
        "registrationState": null,
        "resourceTypes": [
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "eastus2"
            ],
            "properties": null,
            "resourceType": "publicIPAddresses",
            "zoneMappings": null
          },
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "eastus2"
            ],
            "properties": null,
            "resourceType": "networkSecurityGroups",
            "zoneMappings": null
          },
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "eastus2"
            ],
            "properties": null,
            "resourceType": "virtualNetworks",
            "zoneMappings": null
          },
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "eastus2"
            ],
            "properties": null,
            "resourceType": "networkInterfaces",
            "zoneMappings": null
          }
        ]
      },
      {
        "id": null,
        "namespace": "Microsoft.Compute",
        "providerAuthorizationConsentState": null,
        "registrationPolicy": null,
        "registrationState": null,
        "resourceTypes": [
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "eastus2"
            ],
            "properties": null,
            "resourceType": "virtualMachines",
            "zoneMappings": null
          }
        ]
      }
    ],
    "provisioningState": "Succeeded",
    "templateHash": "13455319559881947460",
    "templateLink": {
      "contentVersion": "1.0.0.0",
      "id": null,
      "queryString": null,
      "relativePath": null,
      "uri": "https://raw.githubusercontent.com/Azure/iotedge-vm-deploy/1.4/edgeDeploy.json"
    },
    "timestamp": "2023-04-10T16:50:33.747930+00:00",
    "validatedResources": null
  },
  "resourceGroup": "IoTEdgeResourcesEast",
  "tags": null,
  "type": "Microsoft.Resources/deployments"
}
