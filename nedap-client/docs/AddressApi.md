# NedapOnsApi.AddressApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addressAPIByCareProviderId**](AddressApi.md#addressAPIByCareProviderId) | **GET** /v0/administration/careproviders/{care_provider_id}/addresses | Return the addresses of a CareProvider corresponding to the given id.
[**addressAPIByClientContactRelationId**](AddressApi.md#addressAPIByClientContactRelationId) | **GET** /v0/administration/client_contact_relations/{relation_id}/addresses | Return the addresses of a ClientContactRelation corresponding to the given id.
[**addressAPIByClientId**](AddressApi.md#addressAPIByClientId) | **GET** /v0/administration/clients/{client_id}/addresses | Return the addresses of a Client corresponding to the given id.
[**addressAPIByEmployeeId**](AddressApi.md#addressAPIByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/addresses | Return the addresses of an Employee corresponding to the given id.
[**addressAPIById**](AddressApi.md#addressAPIById) | **GET** /v0/administration/addresses/{id} | Find address by id
[**addressAPIMainAddressByClientId**](AddressApi.md#addressAPIMainAddressByClientId) | **GET** /v0/administration/clients/{client_id}/primary_address | Return the address where the client currently resides.
[**addressAPIMainAddressByEmployeeId**](AddressApi.md#addressAPIMainAddressByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/primary_address | Return the currently active main address of the employee corresponding to the given id.

<a name="addressAPIByCareProviderId"></a>
# **addressAPIByCareProviderId**
> ListAddressList addressAPIByCareProviderId(careProviderId)

Return the addresses of a CareProvider corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AddressApi();
let careProviderId = 789; // Number | id

apiInstance.addressAPIByCareProviderId(careProviderId, (error, data, response) => {
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
 **careProviderId** | **Number**| id | 

### Return type

[**ListAddressList**](ListAddressList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressAPIByClientContactRelationId"></a>
# **addressAPIByClientContactRelationId**
> ListAddressList addressAPIByClientContactRelationId(relationId)

Return the addresses of a ClientContactRelation corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AddressApi();
let relationId = 789; // Number | id

apiInstance.addressAPIByClientContactRelationId(relationId, (error, data, response) => {
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
 **relationId** | **Number**| id | 

### Return type

[**ListAddressList**](ListAddressList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressAPIByClientId"></a>
# **addressAPIByClientId**
> ListAddressList addressAPIByClientId(clientId, opts)

Return the addresses of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AddressApi();
let clientId = 789; // Number | id
let opts = { 
  'type': "type_example" // String | the type of address. possible values: 0 (ONBEKEND), 1 (GBA), 2 (CORRESPONDENTIE), 3 (VERBLIJF), 4 (TIJDELIJK), 50 (SLEUTEL_ADDRESS), 98 (OVERIG), 100 (FACTUUR_ADRES)
};
apiInstance.addressAPIByClientId(clientId, opts, (error, data, response) => {
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
 **type** | **String**| the type of address. possible values: 0 (ONBEKEND), 1 (GBA), 2 (CORRESPONDENTIE), 3 (VERBLIJF), 4 (TIJDELIJK), 50 (SLEUTEL_ADDRESS), 98 (OVERIG), 100 (FACTUUR_ADRES) | [optional] 

### Return type

[**ListAddressList**](ListAddressList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressAPIByEmployeeId"></a>
# **addressAPIByEmployeeId**
> ListAddressList addressAPIByEmployeeId(employeeId)

Return the addresses of an Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AddressApi();
let employeeId = 789; // Number | id

apiInstance.addressAPIByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| id | 

### Return type

[**ListAddressList**](ListAddressList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressAPIById"></a>
# **addressAPIById**
> Address addressAPIById(id)

Find address by id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AddressApi();
let id = 789; // Number | the id of an address

apiInstance.addressAPIById(id, (error, data, response) => {
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
 **id** | **Number**| the id of an address | 

### Return type

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressAPIMainAddressByClientId"></a>
# **addressAPIMainAddressByClientId**
> Address addressAPIMainAddressByClientId(clientId)

Return the address where the client currently resides.

Note: this is not the legal address Returns the address where the client currently resides. Not to be used to retrieve the legal address. Sorts the currently active addresses by type, and returns the first one it finds. It uses the following order: temporary, residence, legal (GBA), correspondence, unknown, other, invoice, key address.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AddressApi();
let clientId = 789; // Number | id

apiInstance.addressAPIMainAddressByClientId(clientId, (error, data, response) => {
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

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressAPIMainAddressByEmployeeId"></a>
# **addressAPIMainAddressByEmployeeId**
> Address addressAPIMainAddressByEmployeeId(employeeId)

Return the currently active main address of the employee corresponding to the given id.

Returns the currently active main address of the employee corresponding to the given id. The search order corresponds to the order shown when searching for employees. This can be configured in the application - but this can be set by Nedap only. It defaults to the legal address search order.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AddressApi();
let employeeId = 789; // Number | id

apiInstance.addressAPIMainAddressByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| id | 

### Return type

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

