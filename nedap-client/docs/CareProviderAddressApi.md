# NedapOnsApi.CareProviderAddressApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**careProviderAddressAPIById**](CareProviderAddressApi.md#careProviderAddressAPIById) | **GET** /v0/administration/care_provider_addresses/{id} | Return the address of a Careprovider corresponding to the given id.
[**careProviderAddressAPICreate**](CareProviderAddressApi.md#careProviderAddressAPICreate) | **POST** /v0/administration/care_provider_addresses | Create CareProviderAddress

<a name="careProviderAddressAPIById"></a>
# **careProviderAddressAPIById**
> CareProviderAddress careProviderAddressAPIById(id)

Return the address of a Careprovider corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareProviderAddressApi();
let id = 789; // Number | used for selecting CareProviderAddress

apiInstance.careProviderAddressAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting CareProviderAddress | 

### Return type

[**CareProviderAddress**](CareProviderAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="careProviderAddressAPICreate"></a>
# **careProviderAddressAPICreate**
> CareProviderAddress careProviderAddressAPICreate(body)

Create CareProviderAddress

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareProviderAddressApi();
let body = new NedapOnsApi.CareProviderAddress(); // CareProviderAddress | CareProviderAddress to create

apiInstance.careProviderAddressAPICreate(body, (error, data, response) => {
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
 **body** | [**CareProviderAddress**](CareProviderAddress.md)| CareProviderAddress to create | 

### Return type

[**CareProviderAddress**](CareProviderAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

