# NedapOnsApi.HarmonyZorgdomeinFhirConnectorApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**harmonyZorgdomeinFhirConnectorAPICreate**](HarmonyZorgdomeinFhirConnectorApi.md#harmonyZorgdomeinFhirConnectorAPICreate) | **POST** /v0/ketenverkeer/fhir/r3/bundle_wrapper | Create BundleWrapper

<a name="harmonyZorgdomeinFhirConnectorAPICreate"></a>
# **harmonyZorgdomeinFhirConnectorAPICreate**
> HarmonyBundleWrapper harmonyZorgdomeinFhirConnectorAPICreate(body)

Create BundleWrapper

The bundle contains a single field &#x60;data&#x60; that contains serialized JSON. The response is an empty JSON object.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HarmonyZorgdomeinFhirConnectorApi();
let body = new NedapOnsApi.HarmonyBundleWrapper(); // HarmonyBundleWrapper | BundleWrapper to create

apiInstance.harmonyZorgdomeinFhirConnectorAPICreate(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HarmonyBundleWrapper**](HarmonyBundleWrapper.md)| BundleWrapper to create | 

### Return type

[**HarmonyBundleWrapper**](HarmonyBundleWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

