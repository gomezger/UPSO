@extends('avisos.layouts.base')


@section('content')

    <div style="width: 100%; text-align: left; background-color: #EFEFEF; float: left; font-family: Arial, Helvetica, sans-serif; color: #222; padding: 10px; box-sizing: border-box">
        <h3 style="padding-bottom: 10px; float: left">Descargar publicación</h3>

        <p style="width: 100%; padding-bottom: 0px; float: left;">
            Estás recibiendo este correo electrónico porque recibimos una solicitud para descargar una publicación.
        </p>

        <p style="width: 100%; padding-bottom: 0px; float: left; text-align: center">
            <a
                style="background-color: #ba4545; padding: 10px; border-radius: 5px; color: #FEFEFE; margin: 7px 0; display: inline-block"
                href="{{ config('app.web_url') }}/publicaciones/download/{{ $data['id'] }}"
            >Descargar</a>
        </p>

        <p style="width: 100%; padding-bottom: 0px; float: left;">
            Si no solicitó descargar la publicación, no es necesario realizar ninguna otra acción.
        </p>

        <p style="width: 100%; padding-bottom: 0px; float: left;">
            <small>Si tiene problemas para hacer clic en el botón "Descargar", copie y pegue la siguiente URL en su navegador web: <a href="{{ config('app.web_url') }}/publicaciones/download/{{$data['id']}}">{{ config('app.web_url') }}/publicaciones/download/{{$data['id']}}</a></small>
        </p>

    </div>
@endsection

