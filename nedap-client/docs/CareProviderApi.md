# NedapOnsApi.CareProviderApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**careProviderAPIAssignCareProviderToClient**](CareProviderApi.md#careProviderAPIAssignCareProviderToClient) | **POST** /v0/administration/careproviders/{care_provider_id}/assign_to_client/{client_id} | Assigns an external care provider to a client.
[**careProviderAPIByCategoryAndIdentification**](CareProviderApi.md#careProviderAPIByCategoryAndIdentification) | **GET** /v0/administration/careproviders/category/{category_id}/{identification} | 
[**careProviderAPIByClientId**](CareProviderApi.md#careProviderAPIByClientId) | **GET** /v0/administration/clients/{client_id}/careproviders | Return the care providers of a Client corresponding to the given id.
[**careProviderAPIById**](CareProviderApi.md#careProviderAPIById) | **GET** /v0/administration/careproviders/{id} | Return the Care Provider corresponding to the given id
[**careProviderAPIByIdentification**](CareProviderApi.md#careProviderAPIByIdentification) | **GET** /v0/administration/careproviders/identification/{identification} | Return the Care Provider corresponding to the given identification
[**careProviderAPICreate**](CareProviderApi.md#careProviderAPICreate) | **POST** /v0/administration/careproviders | Create CareProvider
[**careProviderAPIUnassignCareProviderFromClient**](CareProviderApi.md#careProviderAPIUnassignCareProviderFromClient) | **DELETE** /v0/administration/careproviders/{care_provider_id}/unassign_from_client/{client_id} | Unassigns an external care provider from a client.

<a name="careProviderAPIAssignCareProviderToClient"></a>
# **careProviderAPIAssignCareProviderToClient**
> careProviderAPIAssignCareProviderToClient(careProviderId, clientId)

Assigns an external care provider to a client.

After doing this, that care provider will be returned when calling /clients/{id}/care_providers

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareProviderApi();
let careProviderId = 789; // Number | the id of the care provider
let clientId = 789; // Number | the id of the client

apiInstance.careProviderAPIAssignCareProviderToClient(careProviderId, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **careProviderId** | **Number**| the id of the care provider | 
 **clientId** | **Number**| the id of the client | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="careProviderAPIByCategoryAndIdentification"></a>
# **careProviderAPIByCategoryAndIdentification**
> CareProvider careProviderAPIByCategoryAndIdentification(categoryId, identification)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareProviderApi();
let categoryId = 789; // Number | Category of CareProvider
let identification = "identification_example"; // String | ID of care provider (not object ID)

apiInstance.careProviderAPIByCategoryAndIdentification(categoryId, identification, (error, data, response) => {
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
 **categoryId** | **Number**| Category of CareProvider | 
 **identification** | **String**| ID of care provider (not object ID) | 

### Return type

[**CareProvider**](CareProvider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="careProviderAPIByClientId"></a>
# **careProviderAPIByClientId**
> ListCareProviderList careProviderAPIByClientId(clientId)

Return the care providers of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareProviderApi();
let clientId = 789; // Number | id

apiInstance.careProviderAPIByClientId(clientId, (error, data, response) => {
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

[**ListCareProviderList**](ListCareProviderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="careProviderAPIById"></a>
# **careProviderAPIById**
> CareProvider careProviderAPIById(id)

Return the Care Provider corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareProviderApi();
let id = 789; // Number | used for selecting CareProvider

apiInstance.careProviderAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting CareProvider | 

### Return type

[**CareProvider**](CareProvider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="careProviderAPIByIdentification"></a>
# **careProviderAPIByIdentification**
> ListCareProviderList careProviderAPIByIdentification(identification)

Return the Care Provider corresponding to the given identification

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareProviderApi();
let identification = "identification_example"; // String | identification of care provider (not object ID)

apiInstance.careProviderAPIByIdentification(identification, (error, data, response) => {
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
 **identification** | **String**| identification of care provider (not object ID) | 

### Return type

[**ListCareProviderList**](ListCareProviderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="careProviderAPICreate"></a>
# **careProviderAPICreate**
> CareProvider careProviderAPICreate(body)

Create CareProvider

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareProviderApi();
let body = new NedapOnsApi.CareProvider(); // CareProvider | CareProvider to create

apiInstance.careProviderAPICreate(body, (error, data, response) => {
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
 **body** | [**CareProvider**](CareProvider.md)| CareProvider to create | 

### Return type

[**CareProvider**](CareProvider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="careProviderAPIUnassignCareProviderFromClient"></a>
# **careProviderAPIUnassignCareProviderFromClient**
> careProviderAPIUnassignCareProviderFromClient(careProviderId, clientId)

Unassigns an external care provider from a client.

After doing this, that care provider will no longer be returned when calling /clients/{id}/care_providers

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareProviderApi();
let careProviderId = 789; // Number | the id of the care provider
let clientId = 789; // Number | the id of the client

apiInstance.careProviderAPIUnassignCareProviderFromClient(careProviderId, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **careProviderId** | **Number**| the id of the care provider | 
 **clientId** | **Number**| the id of the client | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

