class ProfilesController < ApplicationController
    def new
        # Form for each User profile.
        @User = User.find(params[:user_id])
        @variable = params[:hello]
        @profile = @user.build_profile        
    end
end