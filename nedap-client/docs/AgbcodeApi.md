# NedapOnsApi.AgbcodeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agbcodeAPIAll**](AgbcodeApi.md#agbcodeAPIAll) | **GET** /v0/administration/agbcodes | Returns every Agbcode available from the AgbcodeAPI
[**agbcodeAPIById**](AgbcodeApi.md#agbcodeAPIById) | **GET** /v0/administration/agbcodes/{id} | Return the Agbcode corresponding to the given id
[**agbcodeAPISortedByClientId**](AgbcodeApi.md#agbcodeAPISortedByClientId) | **GET** /v0/administration/agbcodes/by_client_id/{id}/sorted | Return a list of sorted agbcodes, using the tree depth of the location of given person

<a name="agbcodeAPIAll"></a>
# **agbcodeAPIAll**
> ListAgbcodeList agbcodeAPIAll()

Returns every Agbcode available from the AgbcodeAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgbcodeApi();
apiInstance.agbcodeAPIAll((error, data, response) => {
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

[**ListAgbcodeList**](ListAgbcodeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agbcodeAPIById"></a>
# **agbcodeAPIById**
> Agbcode agbcodeAPIById(id)

Return the Agbcode corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgbcodeApi();
let id = 789; // Number | used for selecting Agbcode

apiInstance.agbcodeAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Agbcode | 

### Return type

[**Agbcode**](Agbcode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agbcodeAPISortedByClientId"></a>
# **agbcodeAPISortedByClientId**
> ListAgbcodeList agbcodeAPISortedByClientId(id, opts)

Return a list of sorted agbcodes, using the tree depth of the location of given person

if the agbcode of the location fails, return agbcode from the parent unit

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgbcodeApi();
let id = 789; // Number | of the client's object from who we want the associated agbcode
let opts = { 
  'activeOnly': true // Boolean | Determines if only the active or all agb codes of the active locations of given person are returned.
};
apiInstance.agbcodeAPISortedByClientId(id, opts, (error, data, response) => {
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
 **id** | **Number**| of the client&#x27;s object from who we want the associated agbcode | 
 **activeOnly** | **Boolean**| Determines if only the active or all agb codes of the active locations of given person are returned. | [optional] 

### Return type

[**ListAgbcodeList**](ListAgbcodeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

