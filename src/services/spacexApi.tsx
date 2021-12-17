const axios = require('axios')

export const getData = async () => {
  var data = JSON.stringify({
    query: `{
        rockets {
          company
          cost_per_launch
          country
          description
          engines {
            type
            version
          }
          first_flight
          id
          payload_weights {
            name
            kg
          }
          name
          mass {
            kg
          }
          first_stage {
            thrust_vacuum {
              kN
            }
            fuel_amount_tons
            burn_time_sec
          }
          second_stage {
            burn_time_sec
            fuel_amount_tons
            thrust {
              kN
            }
          }
          success_rate_pct
          wikipedia
        }
      }`,
    variables: {}
  });

  var config = {
    method: 'post',
    url: 'https://api.spacex.land/graphql/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      const rockets = response.data;
      // console.log(rockets)
      return rockets;
    })
    .catch(function (error) {
      console.log(error);
    });
}
