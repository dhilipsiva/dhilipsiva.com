require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


def say_what? message
  print message
  STDIN.gets.chomp
end


def sluggize str
  str.downcase.gsub(/[^a-z0-9]+/, '-').gsub(/^-|-$/, '');
end


desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end


desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    system "node uncss.js"
    cp_r "_site/.", tmp
	cp "_assets/javascripts/test.1.js", tmp
    Dir.chdir tmp
    system "git init"
    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git remote add origin git@github.com:dhilipsiva/dhilipsiva.github.io.git"
    system "git push origin master --force"
  end
end


desc "Create a new post"
task :new do
  title     = say_what?('Title: ')
  filename  = "_posts/#{Time.now.strftime('%Y-%m-%d')}-#{sluggize title}.md"

  if File.exist? filename
    puts "Can't create new post: \e[33m#{filename}\e[0m"
    puts "  \e[31m- Path already exists.\e[0m"
    exit 1
  end

  File.open(filename, "w") do |post|
    post.puts "---"
    post.puts "layout:    post"
    post.puts "title:     #{title}"
    post.puts "---"
    post.puts ""
    post.puts "Once upon a time..."
  end

  puts "A new post was created for at:"
  puts "  \e[32m#{filename}\e[0m"
end


desc "Create a new Job post"
task :new_job do
  startup = say_what?('Startup: ')
  role = say_what?('Role: ')
  location = say_what?('Location: ')
  job_type = say_what?('Job Type: ')

  filename  = "job-board/startups/#{Time.now.strftime('%Y-%m-%d')}-#{sluggize startup}-#{sluggize role}-#{sluggize location}-#{sluggize job_type}.md"

  if File.exist? filename
    puts "Can't create new Job post: \e[33m#{filename}\e[0m"
    puts "  \e[31m- Path already exists.\e[0m"
    exit 1
  end

  File.open(filename, "w") do |post|
    post.puts "---"
    post.puts "layout: job_post"
    post.puts "title: #{startup}, #{role}, #{location}, #{job_type}"
    post.puts "startup: #{startup}"
    post.puts "role: #{role}"
    post.puts "location: #{location}"
    post.puts "job_type: #{job_type}"
    post.puts "---"
    post.puts ""
    post.puts "Once upon a time..."
  end

  puts "A new job post was created for at:"
  puts "  \e[32m#{filename}\e[0m"
end


desc "Create a new Techie post"
task :new_techie do
  name = say_what?('Name: ')
  role = say_what?('Role: ')
  location = say_what?('Location: ')
  job_type = say_what?('Job Type: ')

  filename  = "job-board/techie/#{Time.now.strftime('%Y-%m-%d')}-#{sluggize name}-#{sluggize role}-#{sluggize location}-#{sluggize job_type}.md"

  if File.exist? filename
    puts "Can't create new Techie post: \e[33m#{filename}\e[0m"
    puts "  \e[31m- Path already exists.\e[0m"
    exit 1
  end

  File.open(filename, "w") do |post|
    post.puts "---"
    post.puts "layout: job_post"
    post.puts "title: #{name}, #{role}, #{location}, #{job_type}"
    post.puts "name: #{name}"
    post.puts "role: #{role}"
    post.puts "location: #{location}"
    post.puts "job_type: #{job_type}"
    post.puts "---"
    post.puts "Once upon a time..."
  end

  puts "A new Techie post was created for at:"
  puts "  \e[32m#{filename}\e[0m"
end
