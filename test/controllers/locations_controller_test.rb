require 'test_helper'

class LocationsControllerTest < ActionDispatch::IntegrationTest
  test "should get get_location" do
    get locations_get_location_url
    assert_response :success
  end

end
