# NedapOnsApi.InsuranceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**insuranceAPIByClientId**](InsuranceApi.md#insuranceAPIByClientId) | **GET** /v0/administration/clients/{client_id}/insurances | Return the insurances of a Client corresponding to the given id.
[**insuranceAPIById**](InsuranceApi.md#insuranceAPIById) | **GET** /v0/administration/insurances/{id} | Return the Insurance corresponding to the given id
[**insuranceAPICreate**](InsuranceApi.md#insuranceAPICreate) | **POST** /v0/administration/insurances | Create an Insurance for a Client.
[**insuranceAPIStreamAll**](InsuranceApi.md#insuranceAPIStreamAll) | **GET** /v0/xstream/insurances/data | Return all Insurance models in a streaming manner
[**insuranceAPIStreamUpdates**](InsuranceApi.md#insuranceAPIStreamUpdates) | **GET** /v0/xstream/insurances/updates | Return all Insurance models which where updated since the date given in the request.

<a name="insuranceAPIByClientId"></a>
# **insuranceAPIByClientId**
> ListInsuranceList insuranceAPIByClientId(clientId)

Return the insurances of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.InsuranceApi();
let clientId = 789; // Number | id

apiInstance.insuranceAPIByClientId(clientId, (error, data, response) => {
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
 **clientId** | **Number**| id | 

### Return type

[**ListInsuranceList**](ListInsuranceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="insuranceAPIById"></a>
# **insuranceAPIById**
> Insurance insuranceAPIById(id)

Return the Insurance corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.InsuranceApi();
let id = 789; // Number | used for selecting Insurance

apiInstance.insuranceAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Insurance | 

### Return type

[**Insurance**](Insurance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="insuranceAPICreate"></a>
# **insuranceAPICreate**
> Insurance insuranceAPICreate(body)

Create an Insurance for a Client.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.InsuranceApi();
let body = new NedapOnsApi.Insurance(); // Insurance | the Insurance to create.

apiInstance.insuranceAPICreate(body, (error, data, response) => {
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
 **body** | [**Insurance**](Insurance.md)| the Insurance to create. | 

### Return type

[**Insurance**](Insurance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="insuranceAPIStreamAll"></a>
# **insuranceAPIStreamAll**
> ListInsuranceList insuranceAPIStreamAll()

Return all Insurance models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.InsuranceApi();
apiInstance.insuranceAPIStreamAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ListInsuranceList**](ListInsuranceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="insuranceAPIStreamUpdates"></a>
# **insuranceAPIStreamUpdates**
> ListInsuranceList insuranceAPIStreamUpdates(since)

Return all Insurance models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.InsuranceApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.insuranceAPIStreamUpdates(since, (error, data, response) => {
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
 **since** | **Date**|  | 

### Return type

[**ListInsuranceList**](ListInsuranceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

