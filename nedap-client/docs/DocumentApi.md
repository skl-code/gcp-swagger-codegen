# NedapOnsApi.DocumentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentAPIByClientIdAndDocumentId**](DocumentApi.md#documentAPIByClientIdAndDocumentId) | **GET** /v0/administration/clients/{client_id}/documents/{doc_id} | Find the document corresponding to the given client and document id&#x27;s.
[**documentAPIByClientIdAndEmployeeIdAndDate**](DocumentApi.md#documentAPIByClientIdAndEmployeeIdAndDate) | **GET** /v0/administration/clients/{client_id}/documents/all | Find all documents for a client.
[**documentAPICreate**](DocumentApi.md#documentAPICreate) | **POST** /v0/administration/clients/{client_id}/documents | Create a document for a client. The maximum file size can vary between 10MB and 250MB, but is set to 40MB by default.
[**documentAPIDocumentsByClientInPeriodIncludeArchived**](DocumentApi.md#documentAPIDocumentsByClientInPeriodIncludeArchived) | **GET** /v0/administration/clients/{client_id}/documents/all_archived_included | Find all active and archived documents.
[**documentAPIDownloadByClientIdAndDocumentId**](DocumentApi.md#documentAPIDownloadByClientIdAndDocumentId) | **GET** /v0/administration/clients/{client_id}/documents/{doc_id}/download | Returns a stream of bytes representing the document, be sure to close the stream when done.
[**documentAPIStreamAll**](DocumentApi.md#documentAPIStreamAll) | **GET** /v0/xstream/documents/data | Return all Document models in a streaming manner.
[**documentAPIStreamDeletes**](DocumentApi.md#documentAPIStreamDeletes) | **GET** /v0/xstream/documents/deletes | Return all Document models which where deleted since the date given in the request.
[**documentAPIStreamUpdates**](DocumentApi.md#documentAPIStreamUpdates) | **GET** /v0/xstream/documents/updates | Return all Document models which where updated since the date given in the request.
[**documentAPIUpdateStatus**](DocumentApi.md#documentAPIUpdateStatus) | **PUT** /v0/administration/documents/{document_object_id}/status | Update the status of a document

<a name="documentAPIByClientIdAndDocumentId"></a>
# **documentAPIByClientIdAndDocumentId**
> Document documentAPIByClientIdAndDocumentId(clientId, docId)

Find the document corresponding to the given client and document id&#x27;s.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DocumentApi();
let clientId = 789; // Number | the id of the client
let docId = 789; // Number | the id of the document

apiInstance.documentAPIByClientIdAndDocumentId(clientId, docId, (error, data, response) => {
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
 **clientId** | **Number**| the id of the client | 
 **docId** | **Number**| the id of the document | 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="documentAPIByClientIdAndEmployeeIdAndDate"></a>
# **documentAPIByClientIdAndEmployeeIdAndDate**
> ListDocumentList documentAPIByClientIdAndEmployeeIdAndDate(clientId, opts)

Find all documents for a client.

Optionally filter by employee who has access to the files and by creation date.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DocumentApi();
let clientId = 789; // Number | id
let opts = { 
  'employeeId': 789, // Number | an optional filter. Adding an employee id will only return those documents that that employee can access
  'from': new Date("2013-10-20"), // Date | only return the documents added after this date
  'to': new Date("2013-10-20") // Date | only return the documents added before this date
};
apiInstance.documentAPIByClientIdAndEmployeeIdAndDate(clientId, opts, (error, data, response) => {
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
 **employeeId** | **Number**| an optional filter. Adding an employee id will only return those documents that that employee can access | [optional] 
 **from** | **Date**| only return the documents added after this date | [optional] 
 **to** | **Date**| only return the documents added before this date | [optional] 

### Return type

[**ListDocumentList**](ListDocumentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="documentAPICreate"></a>
# **documentAPICreate**
> Document documentAPICreate(body, clientId)

Create a document for a client. The maximum file size can vary between 10MB and 250MB, but is set to 40MB by default.

WARNING: Documents uploaded without visibility settings (expertise profile or expertise group) may be visible to clients in Caren, depending on how the customer environment is set up.   POST body:  &lt;p&gt;&lt;blockquote&gt;&lt;pre&gt;  POST /t/documents HTTP/1.1  Accept: application/xml  Accept-Encoding: gzip, deflate  Connection: keep-alive  Content-Type: multipart/form-data; boundary&#x3D;---------------------------9051914041544843365972754266  Content-Length: 554  -----------------------------9051914041544843365972754266  Content-Disposition: form-data; name&#x3D;“metadata”  Content-Type: application/json  {\&quot;clientObjectId\&quot;: 12, \&quot;employeeObjectId\&quot;: 10}  -----------------------------9051914041544843365972754266  Content-Disposition: form-data; name&#x3D;“attachment\&quot;; filename&#x3D;“somefilename\&quot;  Content-Type: application/octet-stream  0010010010101001001000  -----------------------------9051914041544843365972754266--  &lt;/pre&gt;&lt;/blockquote&gt;&lt;p&gt;   Curl example  &lt;p&gt;&lt;blockquote&gt;&lt;pre&gt;  curl -vv -S    --cert common-name.pem --key common-name.key    -X POST https://api-development.ons.io/t/documents?client_id&#x3D;12    -H &#x27;Accept: application/xml,application/json&#x27;    -H &#x27;Cache-Control: no-cache&#x27;    -H &#x27;Content-Type: multipart/form-data&#x27;    -F &#x27;metadata&#x3D;{\&quot;clientObjectId\&quot;:12, \&quot;employeeObjectId\&quot; : 10};type&#x3D;application/json&#x27;    -F &#x27;attachment&#x3D;@temp.txt&#x27;  &lt;/pre&gt;&lt;/blockquote&gt;&lt;p&gt;   When using Postman api client the metadata has to be an xml object

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DocumentApi();
let body = new NedapOnsApi.Document(); // Document | An object with metadata about the document (clientObjectId and employeeObjectId are required).  When setting expertise profiles or expertise groups the rightSelection should be set to Group.  The RightSelection `Education` ignores any supplied expertise profiles and expertise groups and applies the  currently valid expertise profile of the employee.
let clientId = 789; // Number | Id of the client object

apiInstance.documentAPICreate(body, clientId, (error, data, response) => {
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
 **body** | [**Document**](Document.md)| An object with metadata about the document (clientObjectId and employeeObjectId are required).  When setting expertise profiles or expertise groups the rightSelection should be set to Group.  The RightSelection &#x60;Education&#x60; ignores any supplied expertise profiles and expertise groups and applies the  currently valid expertise profile of the employee. | 
 **clientId** | **Number**| Id of the client object | 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentAPIDocumentsByClientInPeriodIncludeArchived"></a>
# **documentAPIDocumentsByClientInPeriodIncludeArchived**
> ListDocumentList documentAPIDocumentsByClientInPeriodIncludeArchived(clientId, opts)

Find all active and archived documents.

Optionally filter by employee who has access to the files and by creation date.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DocumentApi();
let clientId = 789; // Number | id
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example", // String | 
  'employeeId': 789, // Number | an optional filter. Adding an employee id will only return thosdocuments that that employee can access
  'from': new Date("2013-10-20"), // Date | only return the documents added after this date
  'to': new Date("2013-10-20") // Date | only return the documents added before this date
};
apiInstance.documentAPIDocumentsByClientInPeriodIncludeArchived(clientId, opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 
 **employeeId** | **Number**| an optional filter. Adding an employee id will only return thosdocuments that that employee can access | [optional] 
 **from** | **Date**| only return the documents added after this date | [optional] 
 **to** | **Date**| only return the documents added before this date | [optional] 

### Return type

[**ListDocumentList**](ListDocumentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="documentAPIDownloadByClientIdAndDocumentId"></a>
# **documentAPIDownloadByClientIdAndDocumentId**
> &#x27;Blob&#x27; documentAPIDownloadByClientIdAndDocumentId(clientId, docId)

Returns a stream of bytes representing the document, be sure to close the stream when done.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DocumentApi();
let clientId = 789; // Number | the id of the client
let docId = 789; // Number | the id of the document

apiInstance.documentAPIDownloadByClientIdAndDocumentId(clientId, docId, (error, data, response) => {
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
 **clientId** | **Number**| the id of the client | 
 **docId** | **Number**| the id of the document | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="documentAPIStreamAll"></a>
# **documentAPIStreamAll**
> ListDocumentList documentAPIStreamAll()

Return all Document models in a streaming manner.

Note: While fields are included for expertiseProfiles and expertiseGroups, these are not filled. That data can be found by fetching the metadata of the individual document.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DocumentApi();
apiInstance.documentAPIStreamAll((error, data, response) => {
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

[**ListDocumentList**](ListDocumentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="documentAPIStreamDeletes"></a>
# **documentAPIStreamDeletes**
> ListDocumentList documentAPIStreamDeletes(since)

Return all Document models which where deleted since the date given in the request.

If no date is given it will return all deleted Document models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DocumentApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.documentAPIStreamDeletes(since, (error, data, response) => {
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

[**ListDocumentList**](ListDocumentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="documentAPIStreamUpdates"></a>
# **documentAPIStreamUpdates**
> ListDocumentList documentAPIStreamUpdates(since)

Return all Document models which where updated since the date given in the request.

Note: While fields are included for expertiseProfiles and expertiseGroups, these are not filled. That data can be found by fetching the metadata of the individual document.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DocumentApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.documentAPIStreamUpdates(since, (error, data, response) => {
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

[**ListDocumentList**](ListDocumentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="documentAPIUpdateStatus"></a>
# **documentAPIUpdateStatus**
> Document documentAPIUpdateStatus(documentObjectId, opts)

Update the status of a document

WARNING: Documents uploaded without visibility settings (expertise profile or expertise group) may be visible to clients in Caren, depending on how the customer environment is set up.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DocumentApi();
let documentObjectId = 789; // Number | id
let opts = { 
  'statusCode': 56 // Number | The status of the document. Possible values: Stored(2), Deleted(3), Archived(6), Scheduled for purging(7)
};
apiInstance.documentAPIUpdateStatus(documentObjectId, opts, (error, data, response) => {
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
 **documentObjectId** | **Number**| id | 
 **statusCode** | **Number**| The status of the document. Possible values: Stored(2), Deleted(3), Archived(6), Scheduled for purging(7) | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

