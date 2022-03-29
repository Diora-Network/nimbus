(function() {var implementors = {};
implementors["nimbus_consensus"] = [{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"nimbus_consensus/struct.NimbusManualSealConsensusDataProvider.html\" title=\"struct nimbus_consensus::NimbusManualSealConsensusDataProvider\">NimbusManualSealConsensusDataProvider</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["nimbus_consensus::manual_seal::NimbusManualSealConsensusDataProvider"]},{"text":"impl&lt;B, PF, BI, RClient, RBackend, ParaClient, CIDP&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"nimbus_consensus/struct.NimbusConsensus.html\" title=\"struct nimbus_consensus::NimbusConsensus\">NimbusConsensus</a>&lt;B, PF, BI, RClient, RBackend, ParaClient, CIDP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;BI: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PF: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;ParaClient: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;RBackend: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;RClient: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["nimbus_consensus::NimbusConsensus"]},{"text":"impl&lt;PF, BI, RBackend, ParaClient, CIDP&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"nimbus_consensus/struct.BuildNimbusConsensusParams.html\" title=\"struct nimbus_consensus::BuildNimbusConsensusParams\">BuildNimbusConsensusParams</a>&lt;PF, BI, RBackend, ParaClient, CIDP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BI: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PF: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;ParaClient: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;RBackend: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["nimbus_consensus::BuildNimbusConsensusParams"]}];
implementors["nimbus_primitives"] = [{"text":"impl&lt;AuthorId&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"nimbus_primitives/struct.InherentDataProvider.html\" title=\"struct nimbus_primitives::InherentDataProvider\">InherentDataProvider</a>&lt;AuthorId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AuthorId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["nimbus_primitives::inherents::InherentDataProvider"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"nimbus_primitives/struct.IntervalBeacon.html\" title=\"struct nimbus_primitives::IntervalBeacon\">IntervalBeacon</a>","synthetic":true,"types":["nimbus_primitives::IntervalBeacon"]}];
implementors["pallet_aura_style_filter"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_aura_style_filter/pallet/struct.Pallet.html\" title=\"struct pallet_aura_style_filter::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_aura_style_filter::pallet::Pallet"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"pallet_aura_style_filter/pallet/enum.Call.html\" title=\"enum pallet_aura_style_filter::pallet::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_aura_style_filter::pallet::Call"]}];
implementors["pallet_author_inherent"] = [{"text":"impl&lt;T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_inherent/struct.BlockExecutor.html\" title=\"struct pallet_author_inherent::BlockExecutor\">BlockExecutor</a>&lt;T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_inherent::exec::BlockExecutor"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_inherent/pallet/struct.Pallet.html\" title=\"struct pallet_author_inherent::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_inherent::pallet::Pallet"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"pallet_author_inherent/pallet/enum.Error.html\" title=\"enum pallet_author_inherent::pallet::Error\">Error</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_inherent::pallet::Error"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"pallet_author_inherent/pallet/enum.Call.html\" title=\"enum pallet_author_inherent::pallet::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_inherent::pallet::Call"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_inherent/pallet/struct._GeneratedPrefixForStorageAuthor.html\" title=\"struct pallet_author_inherent::pallet::_GeneratedPrefixForStorageAuthor\">_GeneratedPrefixForStorageAuthor</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_inherent::pallet::_GeneratedPrefixForStorageAuthor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"pallet_author_inherent/enum.InherentError.html\" title=\"enum pallet_author_inherent::InherentError\">InherentError</a>","synthetic":true,"types":["pallet_author_inherent::InherentError"]}];
implementors["pallet_author_slot_filter"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_slot_filter/migration/struct.EligibleRatioToEligiblityCount.html\" title=\"struct pallet_author_slot_filter::migration::EligibleRatioToEligiblityCount\">EligibleRatioToEligiblityCount</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_slot_filter::migration::EligibleRatioToEligiblityCount"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_slot_filter/num/struct.NonZeroU32.html\" title=\"struct pallet_author_slot_filter::num::NonZeroU32\">NonZeroU32</a>","synthetic":true,"types":["pallet_author_slot_filter::num::NonZeroU32"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_slot_filter/weights/struct.SubstrateWeight.html\" title=\"struct pallet_author_slot_filter::weights::SubstrateWeight\">SubstrateWeight</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_slot_filter::weights::SubstrateWeight"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_slot_filter/pallet/struct.Pallet.html\" title=\"struct pallet_author_slot_filter::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_slot_filter::pallet::Pallet"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_slot_filter/pallet/struct.GenesisConfig.html\" title=\"struct pallet_author_slot_filter::pallet::GenesisConfig\">GenesisConfig</a>","synthetic":true,"types":["pallet_author_slot_filter::pallet::GenesisConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"pallet_author_slot_filter/pallet/enum.Event.html\" title=\"enum pallet_author_slot_filter::pallet::Event\">Event</a>","synthetic":true,"types":["pallet_author_slot_filter::pallet::Event"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"pallet_author_slot_filter/pallet/enum.Call.html\" title=\"enum pallet_author_slot_filter::pallet::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_slot_filter::pallet::Call"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_slot_filter/pallet/struct._GeneratedPrefixForStorageEligibleRatio.html\" title=\"struct pallet_author_slot_filter::pallet::_GeneratedPrefixForStorageEligibleRatio\">_GeneratedPrefixForStorageEligibleRatio</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_slot_filter::pallet::_GeneratedPrefixForStorageEligibleRatio"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_slot_filter/pallet/struct._GeneratedPrefixForStorageEligibleCount.html\" title=\"struct pallet_author_slot_filter::pallet::_GeneratedPrefixForStorageEligibleCount\">_GeneratedPrefixForStorageEligibleCount</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_slot_filter::pallet::_GeneratedPrefixForStorageEligibleCount"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_slot_filter/pallet/struct.Half.html\" title=\"struct pallet_author_slot_filter::pallet::Half\">Half</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_slot_filter::pallet::Half"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_author_slot_filter/pallet/struct.DefaultEligibilityValue.html\" title=\"struct pallet_author_slot_filter::pallet::DefaultEligibilityValue\">DefaultEligibilityValue</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_author_slot_filter::pallet::DefaultEligibilityValue"]}];
implementors["pallet_template"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_template/pallet/struct.Pallet.html\" title=\"struct pallet_template::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_template::pallet::Pallet"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"pallet_template/pallet/enum.Event.html\" title=\"enum pallet_template::pallet::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_template::pallet::Event"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"pallet_template/pallet/enum.Error.html\" title=\"enum pallet_template::pallet::Error\">Error</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_template::pallet::Error"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"pallet_template/pallet/enum.Call.html\" title=\"enum pallet_template::pallet::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_template::pallet::Call"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"pallet_template/pallet/struct._GeneratedPrefixForStorageSomething.html\" title=\"struct pallet_template::pallet::_GeneratedPrefixForStorageSomething\">_GeneratedPrefixForStorageSomething</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["pallet_template::pallet::_GeneratedPrefixForStorageSomething"]}];
implementors["parachain_collator"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_collator/chain_spec/struct.Extensions.html\" title=\"struct parachain_collator::chain_spec::Extensions\">Extensions</a>","synthetic":true,"types":["parachain_collator::chain_spec::Extensions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_collator/chain_spec/struct.ExtensionsFork.html\" title=\"struct parachain_collator::chain_spec::ExtensionsFork\">ExtensionsFork</a>","synthetic":true,"types":["parachain_collator::chain_spec::ExtensionsFork"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_collator/service/struct.TemplateRuntimeExecutor.html\" title=\"struct parachain_collator::service::TemplateRuntimeExecutor\">TemplateRuntimeExecutor</a>","synthetic":true,"types":["parachain_collator::service::TemplateRuntimeExecutor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"parachain_collator/cli/enum.Subcommand.html\" title=\"enum parachain_collator::cli::Subcommand\">Subcommand</a>","synthetic":true,"types":["parachain_collator::cli::Subcommand"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_collator/cli/struct.ExportGenesisStateCommand.html\" title=\"struct parachain_collator::cli::ExportGenesisStateCommand\">ExportGenesisStateCommand</a>","synthetic":true,"types":["parachain_collator::cli::ExportGenesisStateCommand"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_collator/cli/struct.ExportGenesisWasmCommand.html\" title=\"struct parachain_collator::cli::ExportGenesisWasmCommand\">ExportGenesisWasmCommand</a>","synthetic":true,"types":["parachain_collator::cli::ExportGenesisWasmCommand"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_collator/cli/struct.Cli.html\" title=\"struct parachain_collator::cli::Cli\">Cli</a>","synthetic":true,"types":["parachain_collator::cli::Cli"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_collator/cli/struct.RelayChainCli.html\" title=\"struct parachain_collator::cli::RelayChainCli\">RelayChainCli</a>","synthetic":true,"types":["parachain_collator::cli::RelayChainCli"]},{"text":"impl&lt;C, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_collator/rpc/struct.FullDeps.html\" title=\"struct parachain_collator::rpc::FullDeps\">FullDeps</a>&lt;C, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["parachain_collator::rpc::FullDeps"]}];
implementors["parachain_template_runtime"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.OnRuntimeUpgrade.html\" title=\"struct parachain_template_runtime::OnRuntimeUpgrade\">OnRuntimeUpgrade</a>","synthetic":true,"types":["parachain_template_runtime::OnRuntimeUpgrade"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.WeightToFee.html\" title=\"struct parachain_template_runtime::WeightToFee\">WeightToFee</a>","synthetic":true,"types":["parachain_template_runtime::WeightToFee"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.SessionKeys.html\" title=\"struct parachain_template_runtime::SessionKeys\">SessionKeys</a>","synthetic":true,"types":["parachain_template_runtime::SessionKeys"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.Version.html\" title=\"struct parachain_template_runtime::Version\">Version</a>","synthetic":true,"types":["parachain_template_runtime::Version"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.RuntimeBlockLength.html\" title=\"struct parachain_template_runtime::RuntimeBlockLength\">RuntimeBlockLength</a>","synthetic":true,"types":["parachain_template_runtime::RuntimeBlockLength"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.RuntimeBlockWeights.html\" title=\"struct parachain_template_runtime::RuntimeBlockWeights\">RuntimeBlockWeights</a>","synthetic":true,"types":["parachain_template_runtime::RuntimeBlockWeights"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.SS58Prefix.html\" title=\"struct parachain_template_runtime::SS58Prefix\">SS58Prefix</a>","synthetic":true,"types":["parachain_template_runtime::SS58Prefix"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.MinimumPeriod.html\" title=\"struct parachain_template_runtime::MinimumPeriod\">MinimumPeriod</a>","synthetic":true,"types":["parachain_template_runtime::MinimumPeriod"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.ExistentialDeposit.html\" title=\"struct parachain_template_runtime::ExistentialDeposit\">ExistentialDeposit</a>","synthetic":true,"types":["parachain_template_runtime::ExistentialDeposit"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.MaxLocks.html\" title=\"struct parachain_template_runtime::MaxLocks\">MaxLocks</a>","synthetic":true,"types":["parachain_template_runtime::MaxLocks"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.MaxReserves.html\" title=\"struct parachain_template_runtime::MaxReserves\">MaxReserves</a>","synthetic":true,"types":["parachain_template_runtime::MaxReserves"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.TransactionByteFee.html\" title=\"struct parachain_template_runtime::TransactionByteFee\">TransactionByteFee</a>","synthetic":true,"types":["parachain_template_runtime::TransactionByteFee"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.OperationalFeeMultiplier.html\" title=\"struct parachain_template_runtime::OperationalFeeMultiplier\">OperationalFeeMultiplier</a>","synthetic":true,"types":["parachain_template_runtime::OperationalFeeMultiplier"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.ReservedXcmpWeight.html\" title=\"struct parachain_template_runtime::ReservedXcmpWeight\">ReservedXcmpWeight</a>","synthetic":true,"types":["parachain_template_runtime::ReservedXcmpWeight"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.ReservedDmpWeight.html\" title=\"struct parachain_template_runtime::ReservedDmpWeight\">ReservedDmpWeight</a>","synthetic":true,"types":["parachain_template_runtime::ReservedDmpWeight"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.RocLocation.html\" title=\"struct parachain_template_runtime::RocLocation\">RocLocation</a>","synthetic":true,"types":["parachain_template_runtime::RocLocation"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.RelayNetwork.html\" title=\"struct parachain_template_runtime::RelayNetwork\">RelayNetwork</a>","synthetic":true,"types":["parachain_template_runtime::RelayNetwork"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.RelayChainOrigin.html\" title=\"struct parachain_template_runtime::RelayChainOrigin\">RelayChainOrigin</a>","synthetic":true,"types":["parachain_template_runtime::RelayChainOrigin"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.Ancestry.html\" title=\"struct parachain_template_runtime::Ancestry\">Ancestry</a>","synthetic":true,"types":["parachain_template_runtime::Ancestry"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.UnitWeightCost.html\" title=\"struct parachain_template_runtime::UnitWeightCost\">UnitWeightCost</a>","synthetic":true,"types":["parachain_template_runtime::UnitWeightCost"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.MaxInstructions.html\" title=\"struct parachain_template_runtime::MaxInstructions\">MaxInstructions</a>","synthetic":true,"types":["parachain_template_runtime::MaxInstructions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.ParentOrParentsExecutivePlurality.html\" title=\"struct parachain_template_runtime::ParentOrParentsExecutivePlurality\">ParentOrParentsExecutivePlurality</a>","synthetic":true,"types":["parachain_template_runtime::ParentOrParentsExecutivePlurality"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.XcmConfig.html\" title=\"struct parachain_template_runtime::XcmConfig\">XcmConfig</a>","synthetic":true,"types":["parachain_template_runtime::XcmConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.MaxDownwardMessageWeight.html\" title=\"struct parachain_template_runtime::MaxDownwardMessageWeight\">MaxDownwardMessageWeight</a>","synthetic":true,"types":["parachain_template_runtime::MaxDownwardMessageWeight"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.Runtime.html\" title=\"struct parachain_template_runtime::Runtime\">Runtime</a>","synthetic":true,"types":["parachain_template_runtime::Runtime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"parachain_template_runtime/enum.Event.html\" title=\"enum parachain_template_runtime::Event\">Event</a>","synthetic":true,"types":["parachain_template_runtime::Event"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.Origin.html\" title=\"struct parachain_template_runtime::Origin\">Origin</a>","synthetic":true,"types":["parachain_template_runtime::Origin"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"parachain_template_runtime/enum.OriginCaller.html\" title=\"enum parachain_template_runtime::OriginCaller\">OriginCaller</a>","synthetic":true,"types":["parachain_template_runtime::OriginCaller"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.PalletInfo.html\" title=\"struct parachain_template_runtime::PalletInfo\">PalletInfo</a>","synthetic":true,"types":["parachain_template_runtime::PalletInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"parachain_template_runtime/enum.Call.html\" title=\"enum parachain_template_runtime::Call\">Call</a>","synthetic":true,"types":["parachain_template_runtime::Call"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.GenesisConfig.html\" title=\"struct parachain_template_runtime::GenesisConfig\">GenesisConfig</a>","synthetic":true,"types":["parachain_template_runtime::GenesisConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.RuntimeApi.html\" title=\"struct parachain_template_runtime::RuntimeApi\">RuntimeApi</a>","synthetic":true,"types":["parachain_template_runtime::RuntimeApi"]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"parachain_template_runtime/struct.RuntimeApiImpl.html\" title=\"struct parachain_template_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;Block, C&gt;","synthetic":false,"types":["parachain_template_runtime::RuntimeApiImpl"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()