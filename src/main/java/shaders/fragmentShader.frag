#version 150

in vec2 pass_textureCoords;
in vec3 surfaceNormal;
in vec3 toLightVector;

out vec4 out_color;

uniform sampler2D textureSampler;
uniform vec3 lightColor;

void main(void){

    vec3 unitNormal = normalize(surfaceNormal);
    vec3 unitLightVector = normalize(toLightVector);

    float nDotl = dot(unitNormal, unitLightVector);
    float brightness = max(nDotl, 0.0);
    vec3 diffuse = brightness * lightColor;

    out_color = vec4(diffuse, 1.0) * texture(textureSampler, pass_textureCoords);
    //out_color = texture(textureSampler, pass_textureCoords);

}