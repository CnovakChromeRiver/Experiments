define(['jquery', 'underscore', 'backbone', 'localStorage', 'models/reportModel'],
function ( $, _, Backbone, LocalStorage, ReportModel ) {

	'use strict';

	// Expense Report Collection
	// -------------------------

	cr.ReportsCollection = Backbone.Collection.extend({

		model: cr.ReportModel,

		sync: function() {

		},

		url: 'http://staging-linux01.chromeriver.com:8080/cr-webservice/internal/expenseReport/details',

		init: true,

		data: function ( id ) {
			
			var myData = {
				clientDate: "2012-08-10T15:55:34",
			    startTime: null,
			    currentTime: null,
			    retryCount: 0,
			    faultCount: 0,
			    requestId: 0,
			    cachedData: false,
			    loggedInUser: {
			    	username: "svance",
			    	password:"mJHrmOeUoj4=",
			    	customerId:5
				},
			    payload: {
			    	className: "CrMapPayload",
			    	dataItems: {
			    		expenseReportHeaderId: id
			    	}
			    }
			}

			return JSON.stringify(myData);
		},

		currentId: '',

		fetch: function ( id ) {

			this.currentId = id;

			if ( localStorage.getItem(id) ) {

				var response = $.parseJSON(localStorage.getItem(id));

				var tmpItem = new cr.ReportModel({
					id:id,
					myId:response.payload.reportId,
					owner:response.payload.personId,
					name:response.payload.name,
					currency:'USD',
					lineItems: response.payload.lineItems
				});

				var tmpModel = this.get(id);

              	if ( tmpModel ) {
              		this.trigger('display:report', tmpModel);
              	} else {
              		this.addOne(tmpItem);
              	}
				
			} else {

				this.getAjax(id);
			}

		},

		fetchPrev: function () {

			var prevIndex = this.arrayIds.indexOf(this.currentId) - 1;
			if ( prevIndex < 0 ) {
				prevIndex = this.arrayIds.length - 1;
			}
			var prevModel = this.arrayIds[prevIndex];
			this.fetch(prevModel);

		},

		fetchNext: function () {

			var nextIndex = this.arrayIds.indexOf(this.currentId) + 1;
			if ( this.arrayIds.length <= nextIndex ) {
				nextIndex = 0;
			}
			var nextModel = this.arrayIds[nextIndex];
			this.fetch(nextModel);

		},

		addOne: function ( newModel ) {
			this.add(newModel);
		},

		getAjax: function ( id ) {

			var that = this;

			$.ajax({
				url: this.url,
				type: 'POST',
				dataType: 'json',
				headers: {'Accept': 'application/json','Content-Type': 'application/json'},
				contentType: 'json',
				data: this.data(id),
				success: function(response) {

					if ( that.init ) {

						var tmpItem = new cr.ReportModel({
							id:id,
							myId:response.payload.reportId,
							owner:response.payload.personId,
							name:response.payload.name,
							currency:'USD',
							lineItems: response.payload.lineItems
						});

	                  	that.addOne(tmpItem);
	                 
						that.getTheRest(id);
	                  	that.init = false;

                  } else {

                  		that.getTheRest(id);

                  }

                  localStorage.setItem(id, JSON.stringify(response));

				},
				error: function(msg, statusText, errorThrown) {
					console.log(statusText);
					console.log(errorThrown);
				}
			});

		},

		arrayIds:  ["00004922-8A51-082F-045F-83C3E340A66B",
					"0000060F-C74E-1B81-FC14-47B94503F4D0",
					"00001756-2CAB-4304-0DDB-9F9473AAC7A3",
					"00001A00-E4F0-BC53-8436-51FD0A31E652",
					"00001F29-DAC8-C044-2A6F-29F17149C23D",
					"00002C81-84C9-030F-7FBC-9095100068FF",
					"000033AE-F9CE-F400-A2CA-983ECCC14137",
					"00003406-729B-FFED-1425-DC591339328E",
					"000043A5-1727-A809-37B2-9DACAD7582CC",
					"00004727-9722-17B6-B07F-882A68D21492"]
		,

		iterator: 0,

		getTheRest: function ( id ) {

			if( id !== this.arrayIds[this.iterator] && this.iterator < this.arrayIds.length ) {

				this.getAjax(this.arrayIds[this.iterator]);
				this.iterator++;
			}
		}

	});

	return cr.ReportsCollection;

});