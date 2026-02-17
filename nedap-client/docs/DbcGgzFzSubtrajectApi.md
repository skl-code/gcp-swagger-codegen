# NedapOnsApi.DbcGgzFzSubtrajectApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dbcGgzFzSubtrajectAPIAll**](DbcGgzFzSubtrajectApi.md#dbcGgzFzSubtrajectAPIAll) | **GET** /v0/dbc/fz/subtraject | Fetches a number (&#x27;limit&#x27;) of subtrajects that lay within the given time period.
[**dbcGgzFzSubtrajectAPIGeslotenTrajectenV2**](DbcGgzFzSubtrajectApi.md#dbcGgzFzSubtrajectAPIGeslotenTrajectenV2) | **GET** /v0/dbc/fz/subtraject/gesloten | Returns all the subtrajects that where closed within the given period.
[**dbcGgzFzSubtrajectAPIGetValueAt**](DbcGgzFzSubtrajectApi.md#dbcGgzFzSubtrajectAPIGetValueAt) | **GET** /v0/dbc/fz/subtraject/{id}/history | Return the (financial) value for a dbbc in a given moment in time

<a name="dbcGgzFzSubtrajectAPIAll"></a>
# **dbcGgzFzSubtrajectAPIAll**
> DbcGgzFzListSubtrajectList dbcGgzFzSubtrajectAPIAll(validFrom, validTo, limit, offset, opts)

Fetches a number (&#x27;limit&#x27;) of subtrajects that lay within the given time period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzFzSubtrajectApi();
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 
let limit = 56; // Number | 
let offset = 56; // Number | 
let opts = { 
  'includeAllRegistrations': true, // Boolean | 
  'includeAllGrouperResults': true, // Boolean | 
  'onlyAfleidbareRegistraties': true // Boolean | 
};
apiInstance.dbcGgzFzSubtrajectAPIAll(validFrom, validTo, limit, offset, opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | 
 **validTo** | **Date**|  | 
 **limit** | **Number**|  | 
 **offset** | **Number**|  | 
 **includeAllRegistrations** | **Boolean**|  | [optional] [default to true]
 **includeAllGrouperResults** | **Boolean**|  | [optional] [default to true]
 **onlyAfleidbareRegistraties** | **Boolean**|  | [optional] [default to true]

### Return type

[**DbcGgzFzListSubtrajectList**](DbcGgzFzListSubtrajectList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcGgzFzSubtrajectAPIGeslotenTrajectenV2"></a>
# **dbcGgzFzSubtrajectAPIGeslotenTrajectenV2**
> DbcGgzFzListSubtrajectList dbcGgzFzSubtrajectAPIGeslotenTrajectenV2(validFrom, validTo, opts)

Returns all the subtrajects that where closed within the given period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzFzSubtrajectApi();
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 
let opts = { 
  'includeAllRegistrations': true, // Boolean | 
  'includeAllGrouperResults': true, // Boolean | 
  'onlyAfleidbareRegistraties': true // Boolean | 
};
apiInstance.dbcGgzFzSubtrajectAPIGeslotenTrajectenV2(validFrom, validTo, opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | 
 **validTo** | **Date**|  | 
 **includeAllRegistrations** | **Boolean**|  | [optional] 
 **includeAllGrouperResults** | **Boolean**|  | [optional] 
 **onlyAfleidbareRegistraties** | **Boolean**|  | [optional] 

### Return type

[**DbcGgzFzListSubtrajectList**](DbcGgzFzListSubtrajectList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcGgzFzSubtrajectAPIGetValueAt"></a>
# **dbcGgzFzSubtrajectAPIGetValueAt**
> DbcGgzFzSubtraject dbcGgzFzSubtrajectAPIGetValueAt(id, referenceDate)

Return the (financial) value for a dbbc in a given moment in time

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzFzSubtrajectApi();
let id = 789; // Number | 
let referenceDate = new Date("2013-10-20"); // Date | 

apiInstance.dbcGgzFzSubtrajectAPIGetValueAt(id, referenceDate, (error, data, response) => {
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
 **id** | **Number**|  | 
 **referenceDate** | **Date**|  | 

### Return type

[**DbcGgzFzSubtraject**](DbcGgzFzSubtraject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

