class Comfy::Admin::Cms::Revisions::SnippetController < Comfy::Admin::Cms::Revisions::BaseController

private

  def load_record
    @record = @site.snippets.find(params[:snippet_id])
  rescue ActiveRecord::RecordNotFound
    flash[:danger] = I18n.t("comfy.admin.cms.revisions.record_not_found")
    redirect_to comfy_admin_cms_site_snippets_path(@site)
  end

  def record_path
    edit_comfy_admin_cms_site_snippet_path(@site, @record)
  end
end
