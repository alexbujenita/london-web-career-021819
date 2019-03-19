require 'test_helper'

class DepotControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get depot_index_url
    assert_response :success
  end

  test "should get show" do
    get depot_show_url
    assert_response :success
  end

  test "should get new" do
    get depot_new_url
    assert_response :success
  end

  test "should get create" do
    get depot_create_url
    assert_response :success
  end

  test "should get edit" do
    get depot_edit_url
    assert_response :success
  end

  test "should get update" do
    get depot_update_url
    assert_response :success
  end

  test "should get destroy" do
    get depot_destroy_url
    assert_response :success
  end

end
