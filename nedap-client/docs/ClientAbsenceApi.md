# NedapOnsApi.ClientAbsenceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientAbsenceAPIByClientId**](ClientAbsenceApi.md#clientAbsenceAPIByClientId) | **GET** /v0/administration/clientAbsences/search_by_client | Return the client absences of a Client corresponding to the given id.
[**clientAbsenceAPIByClientIdAndType**](ClientAbsenceApi.md#clientAbsenceAPIByClientIdAndType) | **GET** /v0/administration/clientAbsences/search_by_client_and_type | Return the type-specific client absences for a Client corresponding to the provided client_id and Type corresponding to the provided type_id.
[**clientAbsenceAPIById**](ClientAbsenceApi.md#clientAbsenceAPIById) | **GET** /v0/administration/clientAbsences/{id} | Get the Client Absence corresponding to the given id
[**clientAbsenceAPICreate**](ClientAbsenceApi.md#clientAbsenceAPICreate) | **POST** /v0/administration/clientAbsences | Create ClientAbsence
[**clientAbsenceAPIDelete**](ClientAbsenceApi.md#clientAbsenceAPIDelete) | **DELETE** /v0/administration/clientAbsences/{id} | Deletes the ClientAbsence with given id
[**clientAbsenceAPIStreamAll**](ClientAbsenceApi.md#clientAbsenceAPIStreamAll) | **GET** /v0/xstream/client_absences/data | Return all ClientAbsences models in a streaming manner
[**clientAbsenceAPIUpdate**](ClientAbsenceApi.md#clientAbsenceAPIUpdate) | **PUT** /v0/administration/clientAbsences/{id} | Updates the given ClientAbsence

<a name="clientAbsenceAPIByClientId"></a>
# **clientAbsenceAPIByClientId**
> ListClientAbsenceList clientAbsenceAPIByClientId(clientId, validFrom, validTo)

Return the client absences of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAbsenceApi();
let clientId = 789; // Number | Long identifying the client
let validFrom = new Date("2013-10-20"); // Date | LocalDate the date to start searching from (inclusive)
let validTo = new Date("2013-10-20"); // Date | LocalDate the date to search until (inclusive)

apiInstance.clientAbsenceAPIByClientId(clientId, validFrom, validTo, (error, data, response) => {
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
 **clientId** | **Number**| Long identifying the client | 
 **validFrom** | **Date**| LocalDate the date to start searching from (inclusive) | 
 **validTo** | **Date**| LocalDate the date to search until (inclusive) | 

### Return type

[**ListClientAbsenceList**](ListClientAbsenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAbsenceAPIByClientIdAndType"></a>
# **clientAbsenceAPIByClientIdAndType**
> ListClientAbsenceList clientAbsenceAPIByClientIdAndType(clientId, validFrom, validTo, typeId)

Return the type-specific client absences for a Client corresponding to the provided client_id and Type corresponding to the provided type_id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAbsenceApi();
let clientId = 789; // Number | Long identifying the client
let validFrom = new Date("2013-10-20"); // Date | LocalDate the date to start searching from (inclusive)
let validTo = new Date("2013-10-20"); // Date | LocalDate the date to search until (inclusive)
let typeId = "typeId_example"; // String | String containing a numeric representation of the type of AbsenceReason                   (ie. \"0\" or \"1\" or \"2\" being USER, DBC and DBC_UNFINANCED respectively)

apiInstance.clientAbsenceAPIByClientIdAndType(clientId, validFrom, validTo, typeId, (error, data, response) => {
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
 **clientId** | **Number**| Long identifying the client | 
 **validFrom** | **Date**| LocalDate the date to start searching from (inclusive) | 
 **validTo** | **Date**| LocalDate the date to search until (inclusive) | 
 **typeId** | **String**| String containing a numeric representation of the type of AbsenceReason                   (ie. \&quot;0\&quot; or \&quot;1\&quot; or \&quot;2\&quot; being USER, DBC and DBC_UNFINANCED respectively) | 

### Return type

[**ListClientAbsenceList**](ListClientAbsenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAbsenceAPIById"></a>
# **clientAbsenceAPIById**
> ClientAbsence clientAbsenceAPIById(id)

Get the Client Absence corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAbsenceApi();
let id = 789; // Number | used for selecting ClientAbsence

apiInstance.clientAbsenceAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientAbsence | 

### Return type

[**ClientAbsence**](ClientAbsence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAbsenceAPICreate"></a>
# **clientAbsenceAPICreate**
> ClientAbsence clientAbsenceAPICreate(body)

Create ClientAbsence

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAbsenceApi();
let body = new NedapOnsApi.ClientAbsence(); // ClientAbsence | ClientAbsence to create

apiInstance.clientAbsenceAPICreate(body, (error, data, response) => {
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
 **body** | [**ClientAbsence**](ClientAbsence.md)| ClientAbsence to create | 

### Return type

[**ClientAbsence**](ClientAbsence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientAbsenceAPIDelete"></a>
# **clientAbsenceAPIDelete**
> clientAbsenceAPIDelete(id)

Deletes the ClientAbsence with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAbsenceApi();
let id = 789; // Number | used for selecting ClientAbsence

apiInstance.clientAbsenceAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientAbsence | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="clientAbsenceAPIStreamAll"></a>
# **clientAbsenceAPIStreamAll**
> ListClientAbsenceList clientAbsenceAPIStreamAll()

Return all ClientAbsences models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAbsenceApi();
apiInstance.clientAbsenceAPIStreamAll((error, data, response) => {
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

[**ListClientAbsenceList**](ListClientAbsenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="clientAbsenceAPIUpdate"></a>
# **clientAbsenceAPIUpdate**
> ClientAbsence clientAbsenceAPIUpdate(body, id)

Updates the given ClientAbsence

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAbsenceApi();
let body = new NedapOnsApi.ClientAbsence(); // ClientAbsence | ClientAbsence to update
let id = 789; // Number | used for selecting ClientAbsence

apiInstance.clientAbsenceAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**ClientAbsence**](ClientAbsence.md)| ClientAbsence to update | 
 **id** | **Number**| used for selecting ClientAbsence | 

### Return type

[**ClientAbsence**](ClientAbsence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

