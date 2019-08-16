---
layout: page
title: Sermons
permalink: /sermons/
---
[comment]: (todo: play one audio at a time)
<div class="container">
    <div class="row">
        <div class="col-md-12 col-lg-12">
            <form class="justify-content-center" id='search-form'>
                <div class="input-group">
                    <input type="text" class="form-control" id="search-box" placeholder="Search" aria-label="Search" aria-describedby="search-button">
                    <button class="btn btn-outline-secondary" type="button" id="search-button"><i class="fa fa-search"></i></button>
                    <!-- prpobably work on the search button -->
                </div>
            </form>
        </div>
    </div>
    <br>
    <div class="row">
        <!-- pagination buttons -->
        <!-- todo: make the pagination buttons responsive -->
        <div class="page-buttons col-md-12 col-lg-12 text-center">
            {% assign last_sermon = site.data.sermons | last %}
            Pages: <br> 
            {% for page in (1..last_sermon.pages) %}
                <button class="btn btn-outline-secondary" type="button" id="{{ page }}">{{ page }}</button>  
            {% endfor %}
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-12 col-lg-12">
            <!-- accordion -->
            {% assign i = 0 %}
            <div class="accordion" id="sermon-accordion">
                {% for sermon in site.data.sermons %}
                    <div class="card">
                        <div class="card-header bg-light" id="heading-{{ i }}">
                            <h6 class="mb-0">
                                <button class="btn btn-outline-light text-dark btn-link" type="button" data-toggle="collapse" data-target="#collapse-{{ i }}" aria-expanded="true" aria-controls="collapse-{{ i }}">
                                    {{ sermon.title }}
                                </button>
                                <span class="float-right mt-2"> {{ sermon.date_pretty }} </span>
                            </h6>
                        </div>
                        <div id="collapse-{{ i }}" class="collapse" aria-labelledby="heading-{{ i }}" data-parent="#sermon-accordion">
                            <div class="card-body mb-3 mt-2">
                                <audio src={% if sermon.raw_path %}"{{ sermon.path }}" {% else %} "{{ sermon.path | prepend: "/" | escape }}" {% endif %} class="mb-3" controls></audio><br>
                                <span class="sermon-speaker float-left ml-2">Speaker: {{ sermon.speaker }} </span>
                                <span class="sermon-scripture float-right mr-2">Scripture: {{ sermon.scripture }} </span>
                            </div>
                        </div>
                    </div>
                {% assign i = i | plus: 1 %}
                {% endfor %}
            </div>
        </div>
    </div>
</div>