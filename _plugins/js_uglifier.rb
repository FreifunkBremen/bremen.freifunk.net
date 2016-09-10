module Jekyll
  require 'uglifier'

  class JSUglifier < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /^\.js$/i
    end

    def output_ext(ext)
      ".js"
    end

    def convert(content)
      if Jekyll.env == "development" then
        content
      else
        begin
          engine = Uglifier.new() # Settings go here
          engine.compile(content)
        rescue StandardError => e
          puts "Uglifier Error: " + e.message
        end
      end
    end
  end
end
