# NedapOnsApi.DbcGgzDiagnoseToekenningApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dbcGgzDiagnoseToekenningAPICreateDiagnoseToekenningen**](DbcGgzDiagnoseToekenningApi.md#dbcGgzDiagnoseToekenningAPICreateDiagnoseToekenningen) | **POST** /v0/dbc/ggz/zorgtraject/{zorgtraject_id}/diagnose_toekenningen | 
[**dbcGgzDiagnoseToekenningAPIDeleteDiagnoseToekenningen**](DbcGgzDiagnoseToekenningApi.md#dbcGgzDiagnoseToekenningAPIDeleteDiagnoseToekenningen) | **DELETE** /v0/dbc/ggz/zorgtraject/{zorgtraject_id}/diagnose_toekenningen | Deletes diagnosis with a given externalid that belong to a given zorgtraject

<a name="dbcGgzDiagnoseToekenningAPICreateDiagnoseToekenningen"></a>
# **dbcGgzDiagnoseToekenningAPICreateDiagnoseToekenningen**
> DbcGgzListDiagnoseToekenningList dbcGgzDiagnoseToekenningAPICreateDiagnoseToekenningen(body, zorgtrajectId)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzDiagnoseToekenningApi();
let body = new NedapOnsApi.DbcGgzListDiagnoseToekenningList(); // DbcGgzListDiagnoseToekenningList | 
let zorgtrajectId = 789; // Number | 

apiInstance.dbcGgzDiagnoseToekenningAPICreateDiagnoseToekenningen(body, zorgtrajectId, (error, data, response) => {
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
 **body** | [**DbcGgzListDiagnoseToekenningList**](DbcGgzListDiagnoseToekenningList.md)|  | 
 **zorgtrajectId** | **Number**|  | 

### Return type

[**DbcGgzListDiagnoseToekenningList**](DbcGgzListDiagnoseToekenningList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dbcGgzDiagnoseToekenningAPIDeleteDiagnoseToekenningen"></a>
# **dbcGgzDiagnoseToekenningAPIDeleteDiagnoseToekenningen**
> DbcGgzListDiagnoseToekenningList dbcGgzDiagnoseToekenningAPIDeleteDiagnoseToekenningen(zorgtrajectId, opts)

Deletes diagnosis with a given externalid that belong to a given zorgtraject

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzDiagnoseToekenningApi();
let zorgtrajectId = 789; // Number | the technical id of the zorgtraject where the diagnosis belongs to
let opts = { 
  'externalId': 789 // Number | the external id of the diagnosis to delete
};
apiInstance.dbcGgzDiagnoseToekenningAPIDeleteDiagnoseToekenningen(zorgtrajectId, opts, (error, data, response) => {
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
 **zorgtrajectId** | **Number**| the technical id of the zorgtraject where the diagnosis belongs to | 
 **externalId** | **Number**| the external id of the diagnosis to delete | [optional] 

### Return type

[**DbcGgzListDiagnoseToekenningList**](DbcGgzListDiagnoseToekenningList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

