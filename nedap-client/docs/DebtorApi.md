# NedapOnsApi.DebtorApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**debtorAPIAll**](DebtorApi.md#debtorAPIAll) | **GET** /v0/administration/debtors | Return a DebtorList containing all Debtors available from the DebtorAPI.
[**debtorAPIByClientId**](DebtorApi.md#debtorAPIByClientId) | **GET** /v0/administration/clients/{client_id}/debtors | Return the debtors of a Client corresponding to the given id.
[**debtorAPIById**](DebtorApi.md#debtorAPIById) | **GET** /v0/administration/debtors/{id} | Return the Debtor corresponding to the given id
[**debtorAPIStreamAll**](DebtorApi.md#debtorAPIStreamAll) | **GET** /v0/xstream/debtors/data | Return all Debtor models in a streaming manner
[**debtorAPIStreamUpdates**](DebtorApi.md#debtorAPIStreamUpdates) | **GET** /v0/xstream/debtors/updates | Return all Debtor models which where updated since the date given in the request.

<a name="debtorAPIAll"></a>
# **debtorAPIAll**
> ListDebtorList debtorAPIAll(opts)

Return a DebtorList containing all Debtors available from the DebtorAPI.

Filtered by Debtor type if one is provided.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DebtorApi();
let opts = { 
  'type': "type_example" // String | The type of debtor. Null means no filtering. Possible filtering values:  <pre>  ORGANISATIE(0, \"Organisatie\")  ASIELZOEKERSCENTRUM(1, \"Asielzoekerscentrum\")  ZORGKANTOOR(2, \"Zorgkantoor\")  ZORGVERZEKERAAR(3, \"Verzekeraar\")  GEMEENTE(4, \"Gemeente\")  ONDERAANNEMER(5, \"Onderaannemer\")  CLIENT(6, \"Cliënt\")  CLIENT_EN_ZORGVERZEKERAAR(7, \"Cliënt en verzekeraar\")  </pre>
};
apiInstance.debtorAPIAll(opts, (error, data, response) => {
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
 **type** | **String**| The type of debtor. Null means no filtering. Possible filtering values:  &lt;pre&gt;  ORGANISATIE(0, \&quot;Organisatie\&quot;)  ASIELZOEKERSCENTRUM(1, \&quot;Asielzoekerscentrum\&quot;)  ZORGKANTOOR(2, \&quot;Zorgkantoor\&quot;)  ZORGVERZEKERAAR(3, \&quot;Verzekeraar\&quot;)  GEMEENTE(4, \&quot;Gemeente\&quot;)  ONDERAANNEMER(5, \&quot;Onderaannemer\&quot;)  CLIENT(6, \&quot;Cliënt\&quot;)  CLIENT_EN_ZORGVERZEKERAAR(7, \&quot;Cliënt en verzekeraar\&quot;)  &lt;/pre&gt; | [optional] 

### Return type

[**ListDebtorList**](ListDebtorList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="debtorAPIByClientId"></a>
# **debtorAPIByClientId**
> ListDebtorList debtorAPIByClientId(clientId, opts)

Return the debtors of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DebtorApi();
let clientId = 789; // Number | id
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | starting time
  'validTo': new Date("2013-10-20") // Date | end time
};
apiInstance.debtorAPIByClientId(clientId, opts, (error, data, response) => {
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
 **validFrom** | **Date**| starting time | [optional] 
 **validTo** | **Date**| end time | [optional] 

### Return type

[**ListDebtorList**](ListDebtorList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="debtorAPIById"></a>
# **debtorAPIById**
> Debtor debtorAPIById(id)

Return the Debtor corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DebtorApi();
let id = 789; // Number | used for selecting Debtor

apiInstance.debtorAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Debtor | 

### Return type

[**Debtor**](Debtor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="debtorAPIStreamAll"></a>
# **debtorAPIStreamAll**
> ListDebtorList debtorAPIStreamAll()

Return all Debtor models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DebtorApi();
apiInstance.debtorAPIStreamAll((error, data, response) => {
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

[**ListDebtorList**](ListDebtorList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="debtorAPIStreamUpdates"></a>
# **debtorAPIStreamUpdates**
> ListDebtorList debtorAPIStreamUpdates(since)

Return all Debtor models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DebtorApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.debtorAPIStreamUpdates(since, (error, data, response) => {
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

[**ListDebtorList**](ListDebtorList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

