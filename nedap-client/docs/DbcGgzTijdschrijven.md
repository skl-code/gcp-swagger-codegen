# NedapOnsApi.DbcGgzTijdschrijven

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directeMinuten** | **Number** | Number of minutes of activity with direct client contact | [default to 0]
**indirecteAlgemeneMinuten** | **Number** | Number of minutes of activity without direct client contact | [default to 0]
**indirecteReistijdminuten** | **Number** | Number of minutes of travel time | [default to 0]
**behandelaar** | **String** | The Practitioner&#x27;s reference id in administration | [optional] 
**afleidbaar** | **Boolean** | True by default, ons-dbc determines the value of this attribute using the behandelaar&#x27;s profession and the definitions provided by Vektis below | [optional] [default to true]
