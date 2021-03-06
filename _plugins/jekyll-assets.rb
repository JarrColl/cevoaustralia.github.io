# File: _plugins/jekyll-assets.rb

require "jekyll-assets"
require "image_optim"

Jekyll::Assets::Env.liquid_proxies.add :image_optim, :img, 'optimize' do

  def initialize(asset, opts, args)
    @path = asset.filename
    @image_optim = ::ImageOptim.new(pngcrush: false, pngout: false, svgo: false, advpng: false, optipng: false, pngquant: false, gifsicle: false);
  end

    def process
    @image_optim.optimize_image!(@path)
  end
end
