# NedapOnsApi.DbcGgzSubtrajectApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dbcGgzSubtrajectAPIAll**](DbcGgzSubtrajectApi.md#dbcGgzSubtrajectAPIAll) | **GET** /v0/dbc/ggz/subtraject | Fetches a number (&#x27;limit&#x27;) of subtrajects that lay within the given time period.
[**dbcGgzSubtrajectAPIById**](DbcGgzSubtrajectApi.md#dbcGgzSubtrajectAPIById) | **GET** /v0/dbc/ggz/subtraject/{id} | Fetch a subtraject
[**dbcGgzSubtrajectAPIGeslotenJeugdTrajecten**](DbcGgzSubtrajectApi.md#dbcGgzSubtrajectAPIGeslotenJeugdTrajecten) | **GET** /v0/dbc/ggz/jw/subtraject/gesloten | Returns all the youth subtrajects that where closed within the given period.
[**dbcGgzSubtrajectAPIGeslotenTrajectenV2**](DbcGgzSubtrajectApi.md#dbcGgzSubtrajectAPIGeslotenTrajectenV2) | **GET** /v0/dbc/ggz/subtraject/gesloten | Returns all the subtrajects that where closed within the given period.
[**dbcGgzSubtrajectAPIGetValueAt**](DbcGgzSubtrajectApi.md#dbcGgzSubtrajectAPIGetValueAt) | **GET** /v0/dbc/ggz/subtraject/{id}/history | Return the (financial) value for a dbc in a given moment in time

<a name="dbcGgzSubtrajectAPIAll"></a>
# **dbcGgzSubtrajectAPIAll**
> DbcGgzListSubtrajectList dbcGgzSubtrajectAPIAll(validFrom, validTo, limit, offset, opts)

Fetches a number (&#x27;limit&#x27;) of subtrajects that lay within the given time period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzSubtrajectApi();
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 
let limit = 56; // Number | 
let offset = 56; // Number | 
let opts = { 
  'includeAllRegistrations': true, // Boolean | 
  'includeAllGrouperResults': true, // Boolean | 
  'onlyAfleidbareRegistraties': true // Boolean | 
};
apiInstance.dbcGgzSubtrajectAPIAll(validFrom, validTo, limit, offset, opts, (error, data, response) => {
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

[**DbcGgzListSubtrajectList**](DbcGgzListSubtrajectList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcGgzSubtrajectAPIById"></a>
# **dbcGgzSubtrajectAPIById**
> DbcGgzSubtraject dbcGgzSubtrajectAPIById(id)

Fetch a subtraject

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzSubtrajectApi();
let id = 789; // Number | used for selecting Subtraject

apiInstance.dbcGgzSubtrajectAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Subtraject | 

### Return type

[**DbcGgzSubtraject**](DbcGgzSubtraject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcGgzSubtrajectAPIGeslotenJeugdTrajecten"></a>
# **dbcGgzSubtrajectAPIGeslotenJeugdTrajecten**
> DbcGgzListSubtrajectList dbcGgzSubtrajectAPIGeslotenJeugdTrajecten(validFrom, validTo)

Returns all the youth subtrajects that where closed within the given period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzSubtrajectApi();
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 

apiInstance.dbcGgzSubtrajectAPIGeslotenJeugdTrajecten(validFrom, validTo, (error, data, response) => {
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

### Return type

[**DbcGgzListSubtrajectList**](DbcGgzListSubtrajectList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcGgzSubtrajectAPIGeslotenTrajectenV2"></a>
# **dbcGgzSubtrajectAPIGeslotenTrajectenV2**
> DbcGgzListSubtrajectList dbcGgzSubtrajectAPIGeslotenTrajectenV2(validFrom, validTo, opts)

Returns all the subtrajects that where closed within the given period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzSubtrajectApi();
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 
let opts = { 
  'includeAllRegistrations': true, // Boolean | 
  'includeAllGrouperResults': true, // Boolean | 
  'onlyAfleidbareRegistraties': true // Boolean | 
};
apiInstance.dbcGgzSubtrajectAPIGeslotenTrajectenV2(validFrom, validTo, opts, (error, data, response) => {
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

[**DbcGgzListSubtrajectList**](DbcGgzListSubtrajectList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcGgzSubtrajectAPIGetValueAt"></a>
# **dbcGgzSubtrajectAPIGetValueAt**
> DbcGgzSubtraject dbcGgzSubtrajectAPIGetValueAt(id, referenceDate)

Return the (financial) value for a dbc in a given moment in time

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzSubtrajectApi();
let id = 789; // Number | 
let referenceDate = new Date("2013-10-20"); // Date | 

apiInstance.dbcGgzSubtrajectAPIGetValueAt(id, referenceDate, (error, data, response) => {
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

[**DbcGgzSubtraject**](DbcGgzSubtraject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

